import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import HomePage from "@/components/home/HomePage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <Head>
          <title>Neluša&#39;s Portfolio!</title>
          <meta
            name="description"
            content="I post about programming and web development."
          />
        </Head>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
