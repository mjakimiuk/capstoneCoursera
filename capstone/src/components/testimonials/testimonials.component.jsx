import React from "react";

import styles from "./testimonials.module.css";
import TestimonialsItem from "../testimonials-item/testimonials-item.component";

const data = [
  {
    id: 1,
    review:
      "Great food, great service, great atmosphere. I would recommend this restaurant to anyone who is looking for a great meal.",
    user: "John Doe",
  },
  {
    id: 2,
    review:
      "Amazing food, amazing service, amazing atmosphere. I would recommend this restaurant to anyone who is looking for a great meal.",
    user: "Jane Doe",
  },
  {
    id: 3,
    review:
      "Fantastic food! Totally recommend this place. The staff are very friendly and the food is delicious.",
    user: "John Smith",
  },
  {
    id: 4,
    review:
      "The food was amazing! The staff were very friendly and the atmosphere was great.",
    user: "Jane Smith",
  },
];

const Testimonials = (props) => {
  return (
    <section className={styles["testimonials"]}>
      <ul className={styles["frame13"]}>
        {data.map((item) => {
          return <TestimonialsItem key={item.id} props={item} />;
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
