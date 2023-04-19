import API from "./api";

type RegisterDataType = {
  nickname: string,
  username: string,
  email: string,
  password: string
}

type PasswordDataType = {
  password: string,
  new_password: string,
  confirm_new_password: string,
}

const userService = {
  getUser : async (token: string) => {
    return API.callWithToken('/wp/v2/users/me' ,{token})
  },
  register : async (data: RegisterDataType) => {
    return API.call('/wp/v2/users/register', {
      data,
      method: 'POST',
    })
  },
  changePassword: async (data: PasswordDataType, token: any) => {
    return API.callWithToken('/wp/v2/users/password', {
      data,
      token,
      method: "PUT",
    })
  }
}

export default userService;