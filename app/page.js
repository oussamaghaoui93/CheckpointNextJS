import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container text-center mt-5">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">I’m Ghaoui Oussama, a junior web developer passionate about creating impactful online experiences.</p>
        <a href="/projects" className="btn btn-primary mt-3">View My Projects</a>
      </div>
    </div>
  );
}
