import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
                <meta
                    property="og:image"
                    content="https://eps0.link/epsilon-equals-zero.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
