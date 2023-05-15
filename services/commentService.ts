import API from "./api";

type AddNewCommentsType = {
  author: any,
  content: string,
  parent: any,
  post: any,
}

const commentService =  {
  getListComment: async (postId: any, page = 1, parent = 0) => {
    const param = `per_page=5&page=${page}&post=${postId}&parent=${parent}&order=asc&exclude=[]`;
    const url = `/wp/v2/comments?${param}`;
    return API.call(url);
  },
  addComment: async (data: AddNewCommentsType, token: any) => {
    return API.callWithToken('/wp/v2/comments', {
      data,
      token,
      method: 'POST'
    })
  }
}

export default commentService;