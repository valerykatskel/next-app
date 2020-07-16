import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Posts page | Next App</title>
      </Head>
      <h1>Posts page</h1>
      <p>page description</p>
    </MainLayout>
  );
}
