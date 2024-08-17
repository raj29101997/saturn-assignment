import Modal from 'react-bootstrap/Modal';
import PropertyDetails from '../components/PropertyDetails';
import CloseIcon from '../assets/svg/closeIcon';

function PropertyModal(props) {
    return (
        <Modal
            // size="lg"
            show={props.open}
            onHide={props.onClose}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
            contentClassName="property-container"
            dialogClassName="dialog-container"
        >
            <Modal.Body className='modal-body-container'>
                <div className='closeicon'>

                    <CloseIcon onClick = {props.onClose} />
                </div>
                <PropertyDetails />
            </Modal.Body>
        </Modal>
    );
}

export default PropertyModal;