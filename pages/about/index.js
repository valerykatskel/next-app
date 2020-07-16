import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
    </MainLayout>
  );
}
