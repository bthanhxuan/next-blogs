import API from "./api";

const menuService = {
  getMenu: async () => {
    return API.call('/menus/v1/menus/main-menu-vi');
  }
}

export default menuService;