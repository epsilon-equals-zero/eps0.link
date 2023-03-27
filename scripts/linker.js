#!/usr/bin/env node

const { program } = require("commander");
const path = require("path");
const fs = require("fs");

const linkpath = path.join(process.cwd(), "./src/links/links.json");

program
    .command("add")
    .description("Adds a new link entry.")
    .requiredOption("--short <short>")
    .requiredOption("--title <title>")
    .requiredOption("--link <link>")
    .option("--hidden", undefined, false)
    .action(function () {
        const options = this.opts();
        const links = JSON.parse(fs.readFileSync(linkpath, "utf-8"));
        links.push({
            short: options.short,
            title: options.title,
            link: options.link,
            showInList: !options.hidden,
        });
        fs.writeFileSync(linkpath, JSON.stringify(links, undefined, 4) + "\n");
    });

program.parse();
