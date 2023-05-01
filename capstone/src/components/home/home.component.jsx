import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero-section.module.css";

const HeroSection = (props) => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-section-main"]}>
        <div className={styles["hero-section-sub"]}>
          <div className={styles["hero-section-sub-container"]}>
            <div className={styles["title-container"]}>
              <span className={styles["text"]}>
                <span>Little Lemon</span>
              </span>
            </div>
            <div className={styles["text-container"]}>
              <span className={styles["text2"]}>
                <span>Oslo</span>
              </span>
            </div>
            <div className={styles["text-container2"]}>
              <span className={styles["text3"]}>
                <span>
                  We are a family owned Mediterranean restaurant, focused on
                  traditional recipes served with a modern twist.
                </span>
              </span>
            </div>
          </div>
          <img
            src="https://i.ibb.co/LQ4XG0m/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg"
            alt="Little Lemon - Oslo"
            className={styles["heroImage"]}
          />
        </div>
        <div className={styles["buttonContainer"]}>
          <div className={styles["property-frame13"]}>
            <span>
              <Link className={styles["buttonText"]} to="reservations">
                Reserve Table
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
