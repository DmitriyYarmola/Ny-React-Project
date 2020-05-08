import { photosType } from "./photos";

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: photosType;
  followed: boolean;
};
