import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import styles from './login/Login.module.css';
import { useState } from 'react';
import { useGlobalState } from '@/state';
import userService from '@/services/userService';
import { useAuthentication } from '@/helpers/useAuthentication';

const initState = {
  password: "",
  new_password: "",
  confirm_new_password: "",
}

const ChangePasswordPage = () => {
  // useAuthentication();
  const [token] = useGlobalState('token');
  const [formData, setFormData] = useState(initState);

  function handleChangeValue (e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmitChangePw = (e: any) => {
    e.preventDefault();

    userService
      .changePassword(formData, token)
      .then(res => {
        if(res.status === 200) {
          alert("Thay đổi mật khẩu thành công!");
          setFormData(initState);
        } else {
          // alert(res.message);
          alert("Updata Failed!");
        }
      })
    
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Đổi mật khẩu</h1>
            <div className={styles["form-login-register"]}>
              <form autoComplete="off" onSubmit={handleSubmitChangePw}>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangeValue}
                  label="Mật khẩu cũ"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />
                <Input
                  type="password"
                  name="new_password"
                  value={formData.new_password}
                  onChange={handleChangeValue}
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />
                <Input
                  type="password"
                  name="confirm_new_password"
                  value={formData.confirm_new_password}
                  onChange={handleChangeValue}
                  label="Nhập lại mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" htmlType='submit'>
                    Thay đổi
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

export default ChangePasswordPage;
