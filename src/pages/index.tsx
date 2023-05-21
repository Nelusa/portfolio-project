import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Example from "@/components/ui/Framer/Example";
import Hero from "@/components/home/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <Head>
          <title>Nelusa Portfolio!</title>
          <meta
            name="description"
            content="I post about programming and web development."
          />
        </Head>
      </Head>{" "}
      {/* <Example /> */}
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
