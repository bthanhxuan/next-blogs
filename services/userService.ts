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

type ProfileDataType = {
  file: File | null,
}

type UpdateProfileType = {
  description?: string,
  mediaId: number
}

const userService = {
  getUser : async (token: any) => {
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
  },
  uploadMediaFile: async (profileData: ProfileDataType, token: any) => {
    const data = new FormData();
    if(profileData.file) {
      data.append('file', profileData.file);
    }
    return API.callFormData('/wp/v2/media', {
      data,
      token
    })
  },
  updateProfile: async ({description, mediaId}: UpdateProfileType, token: any) => {
    return API.callWithToken('/wp/v2/users/me', {
      data: {
        description,
        simple_local_avatar: {
          media_id: mediaId
        },
      },
      token,
      method: "PUT",
    })
  }
}

export default userService;