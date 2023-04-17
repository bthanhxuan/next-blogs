import API from "./api";

// type InputParamsType = {
//   per_page: number,
//   page: number,
//   orderby?: string,
// }

const postService = {
  // getAll: async (inputParams = {}) => {
  //   return API.call('/wp/v2/posts', {
  //     params: {
  //       ...inputParams,
  //       lang: 'vi',
  //     },
  //   });
  // },
  getArticlesLatest: async ({per_page = 3, page = 1, lang = "vi"} = {}) => {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}`
    const url = `/wp/v2/posts?${param}`;
    return API.call(url);
  },
  getArticlesPopular({per_page = 3, page = 1, lang = "vi", orderby="post-views"} = {}) {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}&orderby=${orderby}`
    const url = `/wp/v2/posts?${param}`;
    return API.call(url);
  },
  getArticlesGeneral({per_page = 2, page = 1, lang = "vi"} = {}) {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}`
    const url = `/wp/v2/posts?${param}`;
    return API.call(url);
  },
  getPostSearch: async ({keyword}: any) => {
    return API.call(`/wp/v2/posts?per_page=3&page=1&search=${encodeURI(keyword)}&lang=vi`)
  },
  getCategories: async ({per_page = 100, page = 1, lang = "vi"} = {}) => {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}`
    const url = `/wp/v2/categories?${param}`;
    return API.call(url);
  },
  getPostDetail: async (slug: any) => {
    return API.call(`/wp/v2/posts?slug=${slug}`);
  },
  getPostRelated: async (author: any, exclude: any) => {
    return API.call(`/wp/v2/posts?per_page=3&page=1&author=${author}&lang=vi&exclude=${exclude}`);
  },
  getPostsByCategory: async ({per_page = 3, page = 1, categories = 1} = {}) => {
    const param = `per_page=${per_page}&page=${page}&categories=${categories}`;
    const url = `/wp/v2/posts?${param}`;
    return API.call(url);
  },
}

export default postService;