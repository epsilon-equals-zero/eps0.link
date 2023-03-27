import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";
import { Spinner } from "@/components/Spinner";

const font = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className={clsx(styles.container, font.className)}>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <div className={styles["banner-container"]}>
                            <span>ε = 0</span>
                        </div>
                        <p>Please wait while we redirect you ...</p>
                    </div>
                    <div className={styles.footer}></div>
                </div>
            </div>
        </>
    );
}
