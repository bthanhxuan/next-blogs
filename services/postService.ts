import API from "./api";

// type InputParamsType = {
//   per_page: number,
//   page: number,
//   orderby?: string,
// }

const postService = {
  getAll: async (inputParams = {}) => {
    return API.call('/wp/v2/posts', {
      params: {
        ...inputParams,
        lang: 'vi',
      },
    });
  },
  getArticlesLatest() {
    return this.getAll({ per_page: 3, page: 1 });
  },
  getArticlesPopular() {
    return this.getAll({ per_page: 3, page: 1, orderby: 'post-views' });
  },
  getArticlesGeneral(page = 1) {
    return this.getAll({ per_page: 2, page });
  },
}

export default postService;