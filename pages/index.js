import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Main page of Next.js app</title>
      </Head>
      <h1>Hello Next.js</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </MainLayout>
  );
}
