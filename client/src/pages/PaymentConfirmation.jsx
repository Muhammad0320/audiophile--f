import Modal from "../ui/Modal";
import Confirmation from "../ui/Confirmation";

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
