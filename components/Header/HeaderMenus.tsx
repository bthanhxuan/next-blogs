import Link from "next/link";
import styles from './Header.module.css';

function HeaderMenus() {
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className={styles["header-nav"]}>
        <ul className={styles["header-nav__lists"]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Team</a>
            <ul>
              <li>
                <a href="/">Our Team 1</a>
              </li>
              <li>
                <a href="/">Our Team 2</a>
              </li>
              <li>
                <a href="/">Our Team 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
            <ul>
              <li>
                <a href="/">Contact 1</a>
              </li>
              <li>
                <a href="/">Contact 2</a>
              </li>
              <li>
                <a href="/">Contact 3</a>
                <ul>
                  <li>
                    <a href="/">Contact 11</a>
                  </li>
                  <li>
                    <a href="/">Contact 12</a>
                  </li>
                  <li>
                    <a href="/">Contact 13</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={styles["header-nav__lists"]}>
          <li className={styles["user"]}>
            <Link href="/login">
              <i className={`${styles.icons} ion-person`} /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
