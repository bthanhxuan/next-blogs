import { useGlobalState } from "@/state";
import Link from "next/link";
import Cookies from "js-cookie";
import styles from './Header.module.css';
import { useRouter } from "next/router";

function HeaderMenus() {

  const router = useRouter();
  const [, setToken] = useGlobalState('token');
  const [userInfo, setUserInfo] = useGlobalState('currentUser');

  function handleLogout() {
    const check = window.confirm('Bạn thực sự muốn Logout hay không ?');
    if (check) {
      Cookies.remove('token');
      setToken('');
      setUserInfo(null);
      router.push('/login');
    }
  }

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
          {!userInfo && (
            <li className="user">
              <Link href="/login">
                <i className="icons ion-person" /> Tài khoản
              </Link>
            </li>
          )}
          {userInfo && (
            <li className="user">
              <Link href="/">
                <i className="icons ion-person" /> {userInfo.name}
              </Link>
              <ul>
                <li>
                  <Link href="/update-profile">Update Profile</Link>
                </li>
                <li>
                  <Link href="/change-pw">Change Password</Link>
                </li>
                <li>
                  <Link href="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
