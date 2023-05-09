import Link from "next/link";
import Layout from "../components/layout";

export default function homePage() {
  return (
    <>
    <Layout index> </Layout>
    <p></p>
    <Link href="./author">Go to author page!</Link>
    <p></p>
    <Link href="./album">Go to album page!</Link>
    </>
  )
}