#!/usr/bin/env node

const { program } = require("commander");
const path = require("path");
const fs = require("fs");

const linkpath = path.join(process.cwd(), "./src/links/links.json");

function getLinks() {
    return JSON.parse(fs.readFileSync(linkpath, "utf-8"));
}
function setLinks(links) {
    fs.writeFileSync(linkpath, JSON.stringify(links, undefined, 4) + "\n");
}

program
    .command("add")
    .description("Adds a new link entry.")
    .requiredOption("--short <short>")
    .requiredOption("--title <title>")
    .requiredOption("--link <link>")
    .option("--hidden", undefined, false)
    .action(function () {
        const { short, title, link, hidden } = this.opts();
        setLinks(
            getLinks().concat([
                {
                    short,
                    title,
                    link,
                    hidden: !!hidden,
                },
            ])
        );
    });

program
    .command("remove")
    .description("Removes an existing link entry.")
    .argument("<short>")
    .action(function () {
        const short = this.args[0];
        setLinks(getLinks().filter((l) => l.short !== short));
    });

program.parse();
