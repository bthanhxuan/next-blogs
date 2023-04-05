import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

type CurrentUserType = {
  id: string,
  name?: string,
  email?: string,
  username?: string,
  nickname?: string,
  description?: string,
  slug?: string,
  link?: string,
}

type MenuType = {
  ID: number,
  title: string,
  url: string,
  child_items: string,
}

type CategoriesType = {
  id: number,
  name: string,
  slug: string,
}

type TypeInitState = {
  token?: string,
  menus: MenuType[],
  categories: CategoriesType[],
  currentUser: CurrentUserType | null,
}

const initialState: TypeInitState = {
  token: '',
  menus: [],
  categories: [],
  currentUser: null,
}

const { useGlobalState } = createGlobalState(initialState);

export {
  useGlobalState
}