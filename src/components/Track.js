function Track({title, artist}) {
    return (
        <div className="track mb-2">
            <div className="song">
                <p className="title">{title}</p>
                <p className="artist">{artist}</p>
            </div>
            <img alt={title} src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" className="album-cover" />
            <div className="play"></div>
        </div>
    );
}

export default Track;