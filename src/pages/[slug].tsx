import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";
import links from "@/links/links.json"
import { Spinner } from "@/components/Spinner";
import { GetStaticPropsContext } from "next";

const font = Playfair_Display({ subsets: ["latin"] });

type RedirectPageProps = {
    short: string,
    title: string,
    link: string
}

export default function RedirectPage({
    short,
    title,
    link
}: RedirectPageProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta http-equiv="refresh" content={`0; url=${link}`} />
            </Head>
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

export async function getStaticPaths() {
    return {
      paths: 
        links.map(link => ({ params: { slug: link.short }})),
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: links.find(link => link.short === context.params!.slug)
    }
}