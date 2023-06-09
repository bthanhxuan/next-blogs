import { useGlobalState } from "@/state";
import Link from "next/link";
import Cookies from "js-cookie";
import styles from './Header.module.css';
import { useRouter } from "next/router";

function renderMenus(items: any) {
  return items.map((item: any) => {
    return (
      <li key={item.ID}>
        <a href={item.url}>{item.title}</a>
        {item.child_items && item.child_items.length > 0 && (
          <ul>{renderMenus(item.child_items)}</ul>
        )}
      </li>
    );
  });
}

function HeaderMenus() {

  const router = useRouter();
  const [, setToken] = useGlobalState('token');
  const [userInfo, setUserInfo] = useGlobalState('currentUser');
  const [menus, setMenus] = useGlobalState('menus');
  // console.log("userInfo", userInfo);


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
          {renderMenus(menus)}
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
                  <Link href="/profile">Update Profile</Link>
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
