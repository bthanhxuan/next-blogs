import API from '@/services/api';
import fetch from 'isomorphic-fetch';
// import Cookies from 'js-cookie'

import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
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
  const router = useRouter();
  const [formData, setFormData] = useState(initFormData);

  const errorStr = router.query.error;

  useEffect(() => {
    if (errorStr) {
      alert('Đăng nhập thất bại!');
      window.history.pushState({}, document.title, "/login");
    }
  }, [errorStr])


  function handleOnChange(evt: any) {
    const value = evt.target.value;
    const name = evt.target.name;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(evt: any) {
    evt.preventDefault();

    // API.call('/jwt-auth/v1/token', { data: formData, method: 'POST' })
    //   .then(data => {
    //     console.log(data);
    //   })

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
        console.log("data = ", data);
        // Cookies.set("token", data.token, { expires: 30 });
        // router.push('/');
      })
  }

  function handleSubmitForm(e: any) {
    e.preventDefault();
    const formEl = e.target;
    formEl.submit();
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Đăng nhập</h1>
            <div className={styles["form-login-register"]}>
              {/* <form onSubmit={handleSubmit}> */}
              <form action='/api/login' method='POST' onSubmit={handleSubmitForm}>
                <Input
                  // value={formData.username}
                  // onChange={handleOnChange}
                  name="username"
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off" />
                <Input
                  // value={formData.password}
                  // onChange={handleOnChange}
                  type="password"
                  name="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" htmlType='submit'>
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
