import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Logo from "./../../../assets/hero/heroImage.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Syamsa Al Hadi</h1>
        <p className={styles.description}>
          I'm a front-end developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:syamsanibos@gmail.com@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="" className={styles.myCv}>
          Download My CV
        </a>
      </div>
      <img
        src={Logo}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
