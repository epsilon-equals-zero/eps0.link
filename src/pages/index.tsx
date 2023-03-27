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
                <meta
                    name="description"
                    content="A URL shortener for 'ε = 0' related links."
                    key="desc"
                />
                <meta property="og:title" content="eps0.link" />
                <meta
                    property="og:description"
                    content="A URL shortener for 'ε = 0' related links."
                />
                <meta property="og:image" content="/epsilon-equals-zero.png" />
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
        </>
    );
}
