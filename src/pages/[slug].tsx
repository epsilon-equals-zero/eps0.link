import Head from "next/head";
import styles from "@/styles/slug.module.css";
import links from "@/links/links.json";
import { Spinner } from "@/components/Spinner";
import { GetStaticPropsContext } from "next";
import { Noto_Serif } from "next/font/google";
import clsx from "clsx";

const serif = Noto_Serif({ subsets: ["latin", "greek"], weight: ["700"] });

type RedirectPageProps = {
    short: string;
    title: string;
    link: string;
};

export default function RedirectPage({
    short,
    title,
    link,
}: RedirectPageProps) {
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
