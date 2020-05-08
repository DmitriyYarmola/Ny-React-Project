import { contactsType } from "./contacts";
import { photosType } from "./photos";

export type ProfileType = {
  userId: number | null;
  aboutMe: string | null
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: contactsType;
  photos: photosType;
};
