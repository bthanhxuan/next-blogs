import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import styles from './login/Login.module.css';
import { useGlobalState } from '@/state';
import { useRef, useState } from 'react';
import userService from '@/services/userService';

function Profile() {
  // const inputFileEl = useRef(null);
  const initForm = {
    desc: '',
  }
  const [currUser] = useGlobalState('currentUser');
  const [user, setUser] = useState(currUser);
  const [token] = useGlobalState('token');
  const [objFile, setObjFile] = useState({ file: null, base64URL: ''});
  // console.log('user ', user);


  const [form, setForm] = useState(initForm);

  function handleChangeDesc(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleSelectFile(e: any) {
    const listFiles = e.target.files;
    if(listFiles.length === 0) return;

    const file = listFiles[0] as File;
    
    if( /\/(gif|jpe?g|png|bmp)$/i.test(file.type)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          setObjFile({
            file,
            base64URL: reader.result as string,
          })
        },
        false
      );

      reader.readAsDataURL(file);

    } else {
      alert('File không hợp lệ!');
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      file: objFile.file
    }
    const avatar = await userService.uploadMediaFile(data, token);
    // console.log('avatar', avatar);
    userService
      .updateProfile({
        description: form?.desc,
        mediaId: avatar?.id,
      }, token)
      .then(() => {
        setForm(initForm);
        userService.getUser(token).then(data => {
          setUser(data);
        })
        alert('Cập nhật thành công!')
      })
      .catch(()=>{
        alert('Cập nhật thất bại!')
      })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className={`${styles["form-title"]} text-center`}>Cập nhật thông tin</h1>
            <div className={styles["form-login-register"]}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                {objFile.base64URL && (
                  <img src={objFile.base64URL} />
                )}
                <Input
                  type="file"
                  label="Hình ảnh"
                  // ref={inputFileEl}
                  autoComplete="off"
                  onChange={handleSelectFile}
                />
                <Input
                  type="text"
                  name="desc"
                  value={form.desc}
                  onChange={handleChangeDesc}
                  label="Mô tả ngắn"
                  placeholder="Nhập mật mô tả của bạn ..."
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type="primary"
                    size="large"
                    htmlType='submit'
                  >
                    Cập nhật
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
