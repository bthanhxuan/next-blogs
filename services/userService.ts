import API from "./api";

const userService = {
  getUser : async (token: string) => {
    return API.callWithToken('/wp/v2/users/me' ,{token})
  }
}

export default userService;