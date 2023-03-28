export const BASE_URL = 'http://wp-api.test/wp-json';

// type ErrorsMessageType = {
//   rest_user_invalid_email: string,
//   rest_user_invalid_password: string,
//   rest_user_invalid_username:
//     string,
//   existing_user_login: string,
//   existing_user_email: string,
// }

export const ERRORS_MESSAGE: any = {
  rest_user_invalid_email: 'Email không hợp lệ!',
  rest_user_invalid_password: 'Mật khẩu không được bỏ trống!',
  rest_user_invalid_username:
    'Username chỉ chứa các ký tự từ a-z, 0-9 và ký tự gạch chân "_" !',
  existing_user_login: 'Username đã tồn tại, vui lòng nhập username khác!',
  existing_user_email: 'Email đã tồn tại, vui lòng nhâp email khác!',
};
