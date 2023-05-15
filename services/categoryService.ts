import API from "./api";

const categoryService = {
  getCategories: async ({per_page = 100, page = 1, lang = "vi"} = {}) => {
    const param = `per_page=${per_page}&page=${page}&lang=${lang}`
    const url = `/wp/v2/categories?${param}`;
    return API.call(url);
  },
  getCategoryBySlug: async (slug: any) => {
    return API.call(`/wp/v2/categories?slug=${slug}&lang=vi`);
  }
}

export default categoryService;