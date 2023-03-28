import API from "./api";

type RegisterDataType = {
  nickname: string,
  username: string,
  email: string,
  password: string
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
  }
}

export default userService;