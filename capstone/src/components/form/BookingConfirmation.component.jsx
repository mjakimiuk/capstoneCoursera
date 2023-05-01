import ConfirmIcon from "../icons/circleCheck.icon.component";
import styles from "./form-styles.module.css";
const ConfirmedBooking = () => {
  return (
    <div className={styles["confirmed-booking"]}>
      <div>
        <ConfirmIcon />
      </div>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
