import Link from "next/link";

const SongTest = [ 
    {
        id: 0,
        author: 'Lucie Carver',
        songs: '"Hyperspace Stroll"',
        songimage: 'https://picsum.photos/id/120/200',
        authorimage: 'https://picsum.photos/id/660/200',
    },
    {
        id: 1,
        author: 'Diego Rangel',
        songs: '"Lone Games"',
        songimage: 'https://picsum.photos/id/121/200',
        authorimage: 'https://picsum.photos/id/103/200',
    },
    {
        id: 2,
        author: 'Bryn Roberson',
        songs: '"Techno Ballad"',
        songimage: 'https://picsum.photos/id/122/200',
        authorimage: 'https://picsum.photos/id/726/200',
    },
    {
        id: 3,
        author: 'Oisin Barrera',
        songs: '"There Goes Ballads"',
        songimage: 'https://picsum.photos/id/123/200',
        authorimage: 'https://picsum.photos/id/662/200',
    },
    {
        id: 4,
        author: 'Brendon Estrada',
        songs: '"Far Off Escapes"',
        songimage: 'https://picsum.photos/id/124/200',
        authorimage: 'https://picsum.photos/id/91/200',
    },
    {
        id: 5,
        author: 'Whitney Hernandez',
        songs: '"Every one need unbeat"',
        songimage: 'https://picsum.photos/id/125/200',
        authorimage: 'https://picsum.photos/id/646/200',
    },
    {
        id: 6,
        author: 'Luke Hill',
        songs: '"Nervous Good Time"',
        songimage: 'https://picsum.photos/id/126/200',
        authorimage: 'https://picsum.photos/id/804/200',
    },
    {
        id: 7,
        author: 'Aayan Lawrence',
        songs: '"Safe Evening"',
        songimage: 'https://picsum.photos/id/127/200',
        authorimage: 'https://picsum.photos/id/661/200',
    },
    {
        id: 8,
        author: 'Chelsey Peters',
        songs: '"Unexpected Thoughts"',
        songimage: 'https://picsum.photos/id/128/200',
        authorimage: 'https://picsum.photos/id/656/200',
    },
    {
        id: 9,
        author: 'Kiana Matthews',
        songs: '"Red Mint"',
        songimage: 'https://picsum.photos/id/129/200',
        authorimage: 'https://picsum.photos/id/669/200',
    },
    {
        id: 10,
        author: 'Tomos Padilla',
        songs: '"The Celebrated Motion"',
        songimage: 'https://picsum.photos/id/130/200',
        authorimage: 'https://picsum.photos/id/209/200',
    },
]
export default function SongsTable () {
    return (
        <>
        {SongTest.map((sitem,sindex) => {
            return (
            <div key={sindex} className="songbox">
                <img src={sitem.songimage}></img>
                <p><a className="songscomponentlink" href="/author">{sitem.author}</a></p>
                <p>{sitem.songs}</p>
            </div>
        )
        })}
        </>
    )
}
export function AuthorsTable () {
    return(
        <>
        {SongTest.map((aitem, aindex) => {
        return (
            <div key={aindex} className="authorbox">
                <img src={aitem.authorimage}></img>
                <p>{aitem.author}</p>
            </div>
        )
        })}
        </>
    )
}