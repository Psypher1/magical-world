import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Meta from "../components/SEO/Meta";
import styles from "../styles/Home.module.css";

export interface IPageMeta {
  title?: string;
  description?: string;
}

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Meta
        pageMeta={{
          title: "Potions Room",
        }}
      />

      <main className="">
        <h1 className="mb-4 text-center font-headingAlt  text-6xl">
          My Potions Room
        </h1>
        <p className="max-w-[65ch] text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          incidunt fuga voluptatibus blanditiis tenetur autem sequi ad, vel
          suscipit eveniet, dolorum impedit, omnis qui id? Excepturi quisquam
          laudantium dolores illum.
        </p>

        <div className="page"></div>
      </main>
    </>
  );
};

export default Home;
