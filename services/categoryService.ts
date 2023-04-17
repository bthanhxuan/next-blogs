import API from "./api";

const categoryService = {
  getCategoryBySlug: async (slug: any) => {
    return API.call(`/wp/v2/categories?slug=${slug}&lang=vi`);
  }
}

export default categoryService;