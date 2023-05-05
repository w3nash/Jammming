import { Modal, Button } from 'react-bootstrap';

function MyModal(props) {
	return (
		<Modal
			show={props.show}
			onHide={props.handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>Success ✅</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>You have successfully created your playlist. 👌</p>
				<p>You may now check it in your spotify account. 🎶</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={props.handleClose}>
					Okay
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default MyModal;
