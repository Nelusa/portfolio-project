import CustomCursor from "@/components/ui/CustomCursor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sulphur_Point } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";

//@ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className={sulphurPoint.className}>
        <AnimatedCursor color="230, 138,	0" outerAlpha={0.5} outerSize={6} />
        {/* <CustomCursor /> */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
