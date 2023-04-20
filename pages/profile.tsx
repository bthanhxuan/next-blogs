import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import styles from './login/Login.module.css';
import { useGlobalState } from '@/state';
import { useRef, useState } from 'react';
import userService from '@/services/userService';

function Profile() {
  // const inputFileEl = useRef(null);
  const [currUser] = useGlobalState('currentUser');
  const [user, setUser] = useState(currUser);
  const [token] = useGlobalState('token');
  const [objFile, setObjFile] = useState({ file: null, base64URL: ''});
  // console.log('user ', user);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      file: objFile.file
    }
    userService
      .uploadMediaFile(data, token)
      .then(res => {
        console.log('res', res);
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
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type="primary"
                    size="large"
                    htmlType='submit'
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
