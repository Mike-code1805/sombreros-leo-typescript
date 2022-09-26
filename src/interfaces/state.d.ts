import { User } from "./interface";

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
  hats: any[];
  isFetching: boolean;
}

export interface HatRecicle {
  error: boolean;
  hatsRecicle: any[];
  isFetching: boolean;
}

export interface UserStateProps {
  currentUser: User | null;
  isFetching: boolean;
  error: boolean;
}
