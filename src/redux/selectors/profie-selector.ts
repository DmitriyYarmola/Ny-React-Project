import { useSelector } from 'react-redux';
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from '../types/profile';


export const profile =  useSelector((state:AppStateType) => state.profilePage.profile) as ProfileType | null
export const profileStatus =  useSelector<AppStateType>(state => state.profilePage.status) as string
export const authorizeduserId =  useSelector<AppStateType>(state => state.auth.id) as number | null
