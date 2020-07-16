import Link from "next/link";
import Head from "next/head";
export function MainLayout({ children, title = "Next App Page" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx global>{`
        nav {
          background: grey;
        }
        nav a {
          color: white;
          margin: 0 5px;
          text-decoration: none;
        }

        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
