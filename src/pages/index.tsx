import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import links from "@/links/links.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import clsx from "clsx";
import { Noto_Serif } from "next/font/google";

const serif = Noto_Serif({ subsets: ["latin", "greek"], weight: ["700"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>ε = 0 | link shortener</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={clsx(styles.title, serif.className)}>
                        ε = 0
                    </h1>
                    <p className={styles.subtitle}>link shortener</p>
                </div>
                <div className={styles.linkGrid}>
                    {links
                        .filter((link) => link.showInList)
                        .map((link) => (
                            <a
                                key={link.short}
                                href={"/" + link.short}
                                className={styles.linkItem}
                            >
                                <p className={styles.title}>{link.title}</p>
                                <p className={styles.link}>
                                    eps0.link/{link.short}
                                </p>
                            </a>
                        ))}
                </div>
            </div>

            {/* <div className={styles["container"]}>
                <header className={styles["header"]}>
                    <div>
                        <span className={styles["header-title"]}>ε = 0</span>
                        <span className={styles["header-vert"]} />
                        <span className={styles["header-subtitle"]}>
                            link shortener
                        </span>
                    </div>
                </header>
                <main className={styles["main"]}>
                    {links
                        .filter((link) => link.showInList)
                        .map((link) => (
                            <div
                                key={link.short}
                                className={styles["link-box"]}
                            >
                                <div className={styles["link-body"]}>
                                    <span className={styles["link-title"]}>
                                        {link.title}
                                    </span>
                                    <span>eps0.link/{link.short}</span>
                                </div>
                                <div className={styles["link-action"]}>
                                    <Link
                                        className={styles["link"]}
                                        href={link.link}
                                    >
                                        <FaExternalLinkAlt />
                                    </Link>
                                </div>
                            </div>
                        ))}
                </main>
                <footer className={styles["footer"]}>
                    <Link
                        className={styles["link"]}
                        href="https://github.com/epsilon-equals-zero"
                    >
                        <FaGithub /> Github Organisation
                    </Link>
                </footer>
            </div> */}
        </>
    );
}
