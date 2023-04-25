export interface UserInfoType {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  link: string,
  name: string,
  nickname: string,
  slug: string,
  avatarUrls: string,
  description: string,
  simpleLocalAvatar: {
    full: string,
    mediaId: number
  },
}

export const formatUserInfo = (user: any) => {
  return {
    id: user?.id,
    email: user?.email,
    firstName: user?.first_name,
    lastName: user?.last_name,
    link: user?.link,
    name: user?.name,
    nickname: user?.nickname,
    slug: user?.slug,
    avatarUrls: user?.avatar_urls[96],
    description: user?.description,
    simpleLocalAvatar: {
      full: user?.simple_local_avatar?.full,
      mediaId: user?.simple_local_avatar?.media_id
    },
  } as UserInfoType
}