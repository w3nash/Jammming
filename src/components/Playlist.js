import { Button, Col, Row } from "react-bootstrap";
import MyModal from './MyModal'
import TracklistContainer from "../containers/TracklistContainer";

function Playlist(props) {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <div className="head-content">
                    <i className="fa-solid fa-table-list fa-2xl playlist"></i>
                    <input
                        className="playlist-header"
                        defaultValue={"New Playlist"}
                        onChange={props.handleChange}
                    />
                </div>
            </div>
            <TracklistContainer
                playlist={props.playlist}
                p={1}
                setPlaylist={props.setPlaylist}
                results={props.playlist}
            />
            <Row>
                <Col className="d-grid gap-2 mt-2">
                    <Button
                        className="my-button"
                        size="md"
                        onClick={props.CreatePlaylist} 
                        disabled={props.userID === "" ? true : false}
                    >
                        Create Playlist
                    </Button>
                </Col>
            </Row>
            <MyModal handleClose={props.handleClose} show={props.show} />
        </div>
    );
}

export default Playlist;