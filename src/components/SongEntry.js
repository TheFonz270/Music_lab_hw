import Song from "./Song"
import React from "react"

const SongEntry = ({top20}) => {
    if (!top20.length) return "loading"
    
    const songNodes = top20.map((song, index) => <Song title={song['im:name'].label} />)
        
        console.log(songNodes)
        console.log(songNodes[0].props.title)

    return (
        <>
        <h3>Song Entry</h3>
        <ol>
        {songNodes}
        </ol>
        </>
    )

}

export default SongEntry