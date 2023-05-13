import Link from "next/link";
import Layout from "../components/layout";
import SongsTable from "../components/song";

export default function HomePage() {
  return (
    <>
    <Layout index> </Layout>
    <div className="songstable"><SongsTable/></div>
    </>
  )
}