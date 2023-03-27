import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* HTML Meta Tags */}
                <meta
                    name="description"
                    content="A URL shortener for 'ε = 0' related links."
                />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://eps0.link/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="eps0.link" />
                <meta
                    property="og:description"
                    content="A URL shortener for 'ε = 0' related links."
                />
                <meta
                    property="og:image"
                    content="https://eps0.link/epsilon-equals-zero.png"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="eps0.link" />
                <meta property="twitter:url" content="https://eps0.link/" />
                <meta name="twitter:title" content="eps0.link" />
                <meta
                    name="twitter:description"
                    content="A URL shortener for 'ε = 0' related links."
                />
                <meta
                    name="twitter:image"
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
