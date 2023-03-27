import "@/styles/globals.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import { FaGithub } from "react-icons/fa";

const font = Noto_Sans({ subsets: ["latin"], weight: ["500"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className={clsx(font.className)}>
                <Component {...pageProps} />
            </main>
            <footer className={clsx(font.className)}>
                <span>Copyright &copy; {new Date().getFullYear()} ε = 0</span>
                <span>
                    <a
                        href="https://github.com/epsilon-equals-zero/eps0.link"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                </span>
            </footer>
        </>
    );
}
