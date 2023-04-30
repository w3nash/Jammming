import { Button, Col, Container, Row } from "react-bootstrap";
import Tracklist from "./Tracklist";

function Playlist(props) {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <div className="head-content">
                    <i class="fa-solid fa-table-list fa-2xl playlist"></i>
                    <h2 className="my-card-heading">Playlist</h2>
                    <button className="clear" onClick={props.handleClear}>
                        <i className="fa-solid fa-x"></i>
                        <span className="cleartext">Clear</span>
                    </button>
                </div>
            </div>
            <Tracklist playlist={props.playlist} setPlaylist={props.setPlaylist} results={props.playlist}/>
            <Row>
                <Col className="d-grid gap-2 mt-2">
                    <Button className="my-button" size="md">Create Playlist</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Playlist;