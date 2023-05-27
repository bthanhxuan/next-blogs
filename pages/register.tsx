
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import userService from '@/services/userService';
import Link from 'next/link';
import { useState } from 'react';
import styles from './login/Login.module.css';
import { ERRORS_MESSAGE } from '@/constants';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useAuthentication } from '@/helpers/useAuthentication';

const initRegisterData = {
  nickname: '',
  username: '',
  email: '',
  password: ''
}

function RegisterPage() {

  useAuthentication();

  const router = useRouter();
  const [registerData, setRegisterData] = useState(initRegisterData);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChangeValue(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    let error = '';

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  const handleRegister = (e: any) => {
    e.preventDefault();

    const nickname = registerData.nickname;
    const username = registerData.username;
    const email = registerData.email;
    const password = registerData.password;

    const data = {
      nickname,
      username,
      email,
      password
    };

    const formData = {
      username: data.username,
      password: data.password
    }

    setLoading(true);
    userService.register(data)
      .then(res => {
        // console.log('res', res);
        if (res.status === 201) {
          const body = JSON.stringify(formData);
          const method = "POST";

          fetch('/api/login', {
            body,
            method,
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(data => {
              Cookies.set("token", data.token, { expires: 30 });
              router.push('/');
            })
        } else {
          const errorCode = res.code;
          const errorMessage = ERRORS_MESSAGE[errorCode];
          setFormError(errorMessage);
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Đăng ký</h1>
            <div className={styles["form-login-register"]}>
              {formError && (
                <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>
              )}
              <form autoComplete="off" onSubmit={handleRegister}>
                <Input
                  label="Nickname"
                  name="nickname"
                  value={registerData.nickname}
                  onChange={handleChangeValue}
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                />
                <Input
                  label="Tên đăng nhập"
                  name="username"
                  value={registerData.username}
                  onChange={handleChangeValue}
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                />
                <Input
                  label="Email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChangeValue}
                  placeholder="Nhập email ..."
                  autoComplete="off"
                />
                <Input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChangeValue}
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" htmlType='submit' loading={loading}>
                    Đăng ký
                  </Button>
                  <Link href="/login">Bạn đã có tài khoản?</Link>
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

export default RegisterPage;
