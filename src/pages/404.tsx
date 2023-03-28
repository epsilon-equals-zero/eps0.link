import clsx from "clsx";
import Head from "next/head";
import styles from "@/styles/404.module.css";
import { Noto_Serif } from "next/font/google";

const serif = Noto_Serif({ subsets: ["latin", "greek"], weight: ["700"] });

export default function NotFound() {
    return (
        <>
            <Head>
                <title>ε = 0 | Page Not Found</title>
            </Head>

            <div className={styles.container}>
                <p className={clsx(styles.title, serif.className)}>404</p>
                <p className={clsx(styles.message)}>Page Not Found</p>
            </div>
        </>
    );
}
