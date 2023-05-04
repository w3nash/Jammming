import { useCallback } from "react";
import Track from "../components/Track";

function TrackContainer(props) {

    const addTrack = useCallback(
        (track) => {
            if (props.playlist.some((savedTrack) => savedTrack.id === track.id))
            return;
    
            props.setPlaylist((prevTracks) => [...prevTracks, track]);
        },
        [props.playlist]
      );
    
      const removeTrack = useCallback((track) => {
        props.setPlaylist((prevTracks) =>
          prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
      }, []);

    return (
        <Track
            handleClick={props.p === 1 ? removeTrack : addTrack}
            item={props.item}
            name={props.name}
            src={props.src}
            artist={props.artist}
        />
    );
}

export default TrackContainer;