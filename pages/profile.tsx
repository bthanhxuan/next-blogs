import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import styles from './login/Login.module.css';

function Profile() {

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Cập nhật thông tin</h1>
            <div className={styles["form-login-register"]}>
              <form autoComplete="off">
                <Input
                  type="file"
                  label="Hình ảnh"
                  autoComplete="off"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type="primary"
                    size="large"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default Profile;
