import styles from "./highlights.module.css";
import { Link } from "react-router-dom";
const HighlightsItem = ({ props }) => {
  const { image, title, price, description } = props;
  return (
    <li className={styles["foodContainer"]}>
      <img src={`${image}`} alt={`${title}`} className={styles["foodImage"]} />
      <div className={styles["foodTagContainer "]}>
        <span className={styles["dishName"]}>
          <span>{title}</span>
        </span>
        <span className={styles["dishPrice"]}>
          <span>{`${price}`}</span>
        </span>
      </div>
      <span className={styles["dishDescription"]}>
        <span>{`${description}`}</span>
      </span>
      <Link to="online-order" className={styles["dishButton"]}>
        <span>Order a delviery</span>
      </Link>
    </li>
  );
};

export default HighlightsItem;
