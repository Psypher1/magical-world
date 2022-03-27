// import { PageLayout } from "@components";
// import { PageTitle } from "@components/shared";
import { PageLayout, PageTitle } from "components";
import type { NextPage, GetStaticProps } from "next";
// import { PageLayout, PageTitle } from "../components";

// import { PageTitle } from "@components/shared";
// import { PageLayout } from "@components/";

// import PageTitle from "@components/shared/PageTitle";
// import PageLayout from "@components/layout/PageLayout";

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const title = "Hi, I'm  James";
const subtitle =
  "I am a Draziw, Curator and Professor . I believe that knowledge should be shared, and I try to do my part in that regard each day. I am on a journey to become a reknown Potions Master.";

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <Meta
        pageMeta={{
          title: "Potions Room",
        }}
      /> */}

      <PageLayout pageMeta={{ title: "Potions Room" }}>
        <PageTitle title={title} subtitle={subtitle} />

        <h2 className="mb-4 font-headingAlt text-4xl font-semibold">
          My Potions Room
        </h2>
        <p className="prose prose-lg text-gray-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          incidunt fuga voluptatibus blanditiis tenetur autem sequi ad, vel
          suscipit eveniet, dolorum impedit, omnis qui id? Excepturi quisquam
          laudantium dolores illum.
        </p>
      </PageLayout>
    </>
  );
};

export default Home;
