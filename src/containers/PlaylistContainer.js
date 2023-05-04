import { useState } from "react";
import Playlist from "../components/Playlist";

function PlaylistContainer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClear = () => props.setPlaylist([]);

    return (
        <Playlist
            handleClear={handleClear}
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
            playlist={props.playlist}
            setPlaylist={props.setPlaylist}
            userID={props.userID}
        />
    );
}

export default PlaylistContainer;