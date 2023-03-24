import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Login.module.css';

type FormLogin = {
  username: string,
  password: string,
}

const initFormData: FormLogin = {
  username: '',
  password: ''
}

function LoginPage() {

  const [formData, setFormData] = useState(initFormData);

  function handleOnChange(evt: any) {
    const value = evt.target.value;
    const name = evt.target.name;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log("formData", formData);
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Đăng nhập</h1>
            <div className={styles["form-login-register"]}>
              <form onSubmit={handleSubmit}>
                <Input
                  value={formData.username}
                  onChange={handleOnChange}
                  name="username"
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off" />
                <Input
                  value={formData.password}
                  onChange={handleOnChange}
                  type="password"
                  name="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Đăng nhập
                  </Button>
                  <Link href="/register">Đăng ký</Link>
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

export default LoginPage;
