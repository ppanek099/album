import Link from "next/link";

const SongTest = [ 
    {
        id: 0,
        author: 'Lucie Carver',
        songs: '"Hyperspace Stroll"',
    },
    {
        id: 1,
        author: 'Diego Rangel',
        songs: '"Lone Games"',
    },
    {
        id: 2,
        author: 'Bryn Roberson',
        songs: '"Techno Ballad"',
    },
    {
        id: 3,
        author: 'Oisin Barrera',
        songs: '"There Goes Ballads"',
    },
    {
        id: 4,
        author: 'Brendon Estrada',
        songs: '"Far Off Escapes"',
    },
    {
        id: 5,
        author: 'Whitney Hernandez',
        songs: '"Every one need unbeat"',
    },
    {
        id: 6,
        author: 'Luke Hill',
        songs: '"Nervous Good Time"',
    },
    {
        id: 7,
        author: 'Aayan Lawrence',
        songs: '"Safe Evening"',
    },
    {
        id: 8,
        author: 'Chelsey Peters',
        songs: '"Unexpected Thoughts"',
    },
    {
        id: 9,
        author: 'Kiana Matthews',
        songs: '"Red Mint"',
    },
    {
        id: 10,
        author: 'Tomos Padilla',
        songs: '"The Celebrated Motion"',
    },
]
const song0 = SongTest[0]
const song1 = SongTest[1]
const song2 = SongTest[2]
const song3 = SongTest[3]
const song4 = SongTest[4]
const song5 = SongTest[5]
const song6 = SongTest[6]
const song7 = SongTest[7]
const song8 = SongTest[8]
const song9 = SongTest[9]
const song10 = SongTest[10]
export default function SongsTable () {
    return (
        <>
        <div className="songbox">
            <img src="https://picsum.photos/id/120/200"></img>
            <p><Link href="/author">{song0.author}</Link></p>
            <p>{song0.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/121/200"></img>
            <p><Link href="/author">{song1.author}</Link></p>
            <p>{song1.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/122/200"></img>
            <p><Link href="/author">{song2.author}</Link></p>
            <p>{song2.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/123/200"></img>
            <p><Link href="/author">{song3.author}</Link></p>
            <p>{song3.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/124/200"></img>
            <p><Link href="/author">{song4.author}</Link></p>
            <p>{song4.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/125/200"></img>
            <p><Link href="/author">{song5.author}</Link></p>
            <p>{song5.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/126/200"></img>
            <p><Link href="/author">{song6.author}</Link></p>
            <p>{song6.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/127/200"></img>
            <p><Link href="/author">{song7.author}</Link></p>
            <p>{song7.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/128/200"></img>
            <p><Link href="/author">{song8.author}</Link></p>
            <p>{song8.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/129/200"></img>
            <p><Link href="/author">{song9.author}</Link></p>
            <p>{song9.songs}</p>
        </div>
        <div className="songbox">
            <img src="https://picsum.photos/id/130/200"></img>
            <p><Link href="/author">{song10.author}</Link></p>
            <p>{song10.songs}</p>
        </div>
        </>
    )
}
const author0 = SongTest[0]
const author1 = SongTest[1]
const author2 = SongTest[2]
const author3 = SongTest[3]
const author4 = SongTest[4]
const author5 = SongTest[5]
const author6 = SongTest[6]
const author7 = SongTest[7]
const author8 = SongTest[8]
const author9 = SongTest[9]
const author10 = SongTest[10]
export function AuthorsTable () {
    return(
        <>
        <div className="authorbox">
            <img src="https://picsum.photos/id/660/200"></img>
            <p>{author0.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/103/200"></img>
            <p>{author1.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/209/200"></img>
            <p>{author2.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/726/200"></img>
            <p>{author3.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/662/200"></img>
            <p>{author4.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/91/200"></img>
            <p>{author5.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/661/200"></img>
            <p>{author6.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/804/200"></img>
            <p>{author7.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/646/200"></img>
            <p>{author8.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/656/200"></img>
            <p>{author9.author}</p>
        </div>
        <div className="authorbox">
            <img src="https://picsum.photos/id/669/200"></img>
            <p>{author10.author}</p>
        </div>
        </>
    )
}