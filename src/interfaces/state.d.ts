import {HatProps, LoginUser, User} from './interface';

export interface PropsRedux {
  _persist: Persist;
  hat: Hat;
  hatRecicle: HatRecicle;
  user: UserStateProps;
}

export interface Persist {
  rehydrated: boolean;
  version: number;
}

export interface Hat {
  error: boolean;
  hats: HatProps[];
  isFetching: boolean;
}

export interface HatRecicle {
  error: boolean;
  hatsRecicle: any[];
  isFetching: boolean;
}

export interface UserStateProps {
  currentUser: LoginUser;
  isFetching: boolean;
  error: boolean;
}
