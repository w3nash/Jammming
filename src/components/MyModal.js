import { Modal, Button, Form } from "react-bootstrap";

function MyModal(props) {
  function handlePlaylistName(event) {
    props.setPlaylistName(event.target.value);
  }

  function handleUserID(event) {
    props.setUserID(event.target.value);
  }

  return (
    <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Create Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="playlist-name">
              <Form.Label>Playlist Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="My Coolest Playlist"
                autoFocus
                required
                onChange={handlePlaylistName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="user-id">
              <Form.Label>Playlist Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="iamcool"
                required
                onChange={handleUserID}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={props.handleClose}>
            Close
        </Button>
        <Button className="my-button" onClick={props.createPlaylist}>Create</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default MyModal;
