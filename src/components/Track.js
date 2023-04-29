function Track({title, artist}) {
    return (
        <div className="track mb-2">
            <div className="song">
                <p className="title">{title}</p>
                <p className="artist">{artist}</p>
            </div>
            <div className="album-cover"></div>
            <div className="play"></div>
        </div>
    );
}

export default Track;