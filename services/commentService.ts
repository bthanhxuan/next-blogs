import API from "./api";

const commentService =  {
  getListComment: async (postId: any) => {
    const param = `per_page=5&page=1&post=${postId}&parent=0&order=asc&exclude=[]`;
    const url = `/wp/v2/comments?${param}`;
    return API.call(url);
  },
}

export default commentService;