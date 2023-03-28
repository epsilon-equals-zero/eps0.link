import clsx from "clsx";
import Head from "next/head";
import links from "@/links/links.json";
import styles from "@/styles/Home.module.css";
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
                        .filter((link) => !link.hidden)
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
