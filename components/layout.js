import Head from "next/head";

export default function Layout ({ index }) { 
    return (
        <>
        <Head>
            <title>Dyskography</title>
        </Head>
        <div className="LayoutNavbar">

            <img className="logoimage" src="https://picsum.photos/id/529/100"></img>
            <h1>Welcome to Dyskography</h1>
            
            {index ? (
                <>
                    <a className="layoutnavbarlink" href="./author">Go to author page!</a>
                    <p></p>
                    <a className="layoutnavbarlink" href="./album">Go to album page!</a>
                </>
                    ) : (
                    <footer>
                        <a className="layoutnavbarlink" href="/">Back to homepage</a>
                    </footer>
                    ) 
                }
        </div>
        </>
    )
}
