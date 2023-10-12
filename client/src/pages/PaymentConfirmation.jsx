import Confirmation from "../ui/Confirmation";
import Modal from "../ui/Modal";

function PaymentConfirmation() {
  return (
    <Modal>
      <Modal.Window name="checkout" page="confirm">
        <Confirmation />
      </Modal.Window>
    </Modal>
  );
}

export default PaymentConfirmation;
