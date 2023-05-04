import { Button, Col, Row } from "react-bootstrap";
import MyModal from './MyModal'
import TracklistContainer from "../containers/TracklistContainer";

function Playlist(props) {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <div className="head-content">
                    <i className="fa-solid fa-table-list fa-2xl playlist"></i>
                    <h2 className="my-card-heading">Playlist</h2>
                    <button className="clear" onClick={props.handleClear}>
                        <i className="fa-solid fa-x"></i>
                        <span className="cleartext">Clear</span>
                    </button>
                </div>
            </div>
            <TracklistContainer
                playlist={props.playlist}
                p={1}
                setPlaylist={props.setPlaylist}
                results={props.playlist} />
            <Row>
                <Col className="d-grid gap-2 mt-2">
                    <Button
                        className="my-button"
                        size="md"
                        onClick={props.handleShow} 
                        disabled={props.userID === "" ? true : false}
                    >
                        Create Playlist
                    </Button>
                </Col>
            </Row>
            <MyModal handleShow={props.handleShow} handleClose={props.handleClose} show={props.show} setPlaylistName={props.setPlaylistName} />
        </div>
    );
}

export default Playlist;