import Layout from "../components/layout";
import Head from "next/head";
import { AuthorsTable } from "@/components/song";

export default function AuthorPage () {
    return (
        <>
        <Layout> </Layout>
        <div className="songstable"><AuthorsTable/></div>
        </>
    )
}