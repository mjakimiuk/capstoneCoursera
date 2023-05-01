import React from "react";
import CookOne from "../../assets/images/aboutImages/cook1.jpg";
// import CookTwo from "../../assets/images/aboutImages/cook2.jpg";
import styles from "./about.module.css";

const About = (props) => {
  return (
    <section className={styles["hero-section"]}>
      <img
        src={CookOne}
        alt="Little Lemon - Oslo"
        className={styles["cookOne"]}
      />
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
                  Little Lemon Chicago Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
