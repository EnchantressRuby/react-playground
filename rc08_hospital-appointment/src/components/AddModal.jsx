import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddModal({handleClose, show, drName}) {
    //! moved to Doctors.jsx
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment for {drName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Patient Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type="datetime-local" placeholder="Date" />
                        </Form.Group>
                        <div className='text-center '>
                            <Button variant="success" className="me-2">
                                Save
                            </Button>
                            <Button type="button" variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddModal;