import API from "./api";



const postService = {
  getPosts: async ({per_page = 3, page = 1, lang = "vi"} = {}) => {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}`
    const url = `/wp/v2/posts?${param}`;
    return API.call(url);
  }
}

export default postService;