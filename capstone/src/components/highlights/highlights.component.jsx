import React from "react";
import HighlightsItem from "../highlights-item/highlights-item.component";
import styles from "./highlights.module.css";

const data = [
  {
    id: 1,
    image:
      "https://i.ibb.co/kqVSYK2/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg",
    title: "Greek Salad",
    price: "$10.55",
    description:
      "Greek salad is a salad of chopped lettuce, tomato, onion, cucumber, olives, and feta cheese, seasoned with salt, pepper, and olive oil. It is a traditional salad of the Mediterranean cuisine.",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/9rcrXzr/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg",
    title: "Vodka Penne",
    price: "$12.55",
    description:
      "Vodka penne is a pasta dish made with vodka, tomato sauce, and cream. It is a traditional Italian dish.",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/CvWtWnJ/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg",
    title: "Baked Trout",
    price: "$15.35",
    description:
      "Baked trout is a dish made with trout fillets, butter, and lemon juice. It is a traditional dish of the Mediterranean cuisine.",
  },
];

const Highlights = (props) => {
  return (
    <section className={styles["highlights"]}>
      <ul className={styles["frame13"]}>
        {data.map((item) => {
          return <HighlightsItem key={item.id} props={item} />;
        })}
      </ul>
    </section>
  );
};

export default Highlights;
