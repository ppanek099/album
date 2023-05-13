import Link from "next/link";
import Head from "next/head";

export default function Layout ({ index }) { 
    return (
        <>
        <Head>
            <title>Dyskography</title>
        </Head>
        <div className="LayoutNavbar">
            <img className="logoimage" src="https://picsum.photos/id/529/250"></img>
            <h1>Welcome to Dyskography</h1>

            {index ? (
                <>
                    <p></p>
    <Link href="./author">Go to author page!</Link>
    <p></p>
    <Link href="./album">Go to album page!</Link>
    <p></p>
                </>
                ) : (
                <footer>
                    <Link href="/">Back to homepage</Link>
                </footer>
                ) 
            }
        </div>
        </>
    )
}
