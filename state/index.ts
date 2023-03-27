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

type TypeInitState = {
  token?: string,
  currentUser: CurrentUserType | null,
}

const initialState: TypeInitState = {
  token: '',
  currentUser: null,
}

const { useGlobalState } = createGlobalState(initialState);

export {
  useGlobalState
}