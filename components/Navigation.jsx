import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.action}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/clientcomp">ClientComp</Link></li>
        <li><Link href="/servercomp">ServerComp</Link></li>
        <li><Link href="/isr">Incremental-Site-Regeneration</Link></li>
        <li><Link href="/ssg">Server Site Generation</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;