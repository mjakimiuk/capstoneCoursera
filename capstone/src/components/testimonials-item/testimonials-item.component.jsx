import React from "react";
import UserPhoto from "../../assets/images/user/userPhoto.png";

import styles from "./testimonials-item.module.css";

const TestimonialsItem = ({ props }) => {
  const { review, user } = props;

  return (
    <ul className={styles["frame15"]}>
      <div className={styles["frame151"]}>
        <span className={styles["text"]}>
          <span></span>
        </span>
      </div>
      <img src={UserPhoto} alt={`${user}`} className={styles["rectangle4"]} />
      <span className={styles["text02"]}>
        <span>{review}</span>
      </span>
      <span className={styles["text04"]}>
        <span>{user}</span>
      </span>
    </ul>
  );
};

export default TestimonialsItem;
