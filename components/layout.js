import Link from "next/link";
import Head from "next/head";

export default function Layout ({ index, children }) { 
    return (
        <>
        <img src="/indeks.png" width={144} height={144}></img>
        <Head>
            <title>Dyskography</title>
        </Head>
        {index ? (
            <>
                <div>
                    <h1>Welcome to our main site of Dyskography
                    </h1>
                </div>
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
