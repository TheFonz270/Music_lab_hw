import React, {useState, useEffect} from 'react';
import SongEntry from '../components/SongEntry';



const Top20 = () => {

    const [top20, setTop20] = useState([]);

    let url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    useEffect(() => {
        getTop20(url);
    }, []);

  

    const getTop20 = url => {
        fetch(url)
        .then(res => res.json())
        // .then(songs => console.log(songs.feed.entry[0]['im:name'].label))
        .then(songs => setTop20(songs.feed.entry))
    }

    return (
        <>
        <h1>Top 20</h1>
        <SongEntry top20={top20} />
        </>
    )
}

export default Top20