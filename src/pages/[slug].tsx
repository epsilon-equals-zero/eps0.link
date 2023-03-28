import clsx from "clsx";
import Head from "next/head";
import links from "@/links/links.json";
import styles from "@/styles/slug.module.css";
import { GetStaticPropsContext } from "next";
import { Noto_Serif } from "next/font/google";

const serif = Noto_Serif({ subsets: ["latin", "greek"], weight: ["700"] });

type RedirectPageProps = {
    short: string;
    title: string;
    link: string;
};

export default function RedirectPage({ title, link }: RedirectPageProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta http-equiv="refresh" content={`0; url=${link}`} />
            </Head>

            <div className={styles.container}>
                <p className={clsx(styles.epsilon, serif.className)}>ε</p>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: links.map((link) => ({ params: { slug: link.short } })),
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: links.find((link) => link.short === context.params!.slug),
    };
}
