import Link from "next/link";
import Head from "next/head";

export default function Layout ({ index, children }) { 
    return (
        <>
        <Head>
            <title>Dyskography</title>
        </Head>

        <img src="/indeks.png" width={144} height={144}></img>
        <h1>Welcome to Dyskography</h1>

        {index ? (
            <>
            </>
            ) : (
            <footer>
                <Link href="/">Back to homepage</Link>
            </footer>
            ) 
        }
        </>
    )
}
