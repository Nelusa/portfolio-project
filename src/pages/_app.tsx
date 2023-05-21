import CustomCursor from "@/components/ui/CustomCursor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sulphur_Point } from "next/font/google";
import dynamic from "next/dynamic";

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
    <main className={sulphurPoint.className}>
      <AnimatedCursor color="249, 189,	6" outerAlpha={0.2} outerSize={6} />
      {/* <CustomCursor /> */}
      <Component {...pageProps} />
    </main>
  );
}
