import axios from "axios";
import { contactsType } from "../redux/types/contacts";
import { ProfileType } from "../redux/types/profile";

const insteance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1aac8f7e-6c97-4508-b9a5-b61669322c26",
  },
});

export enum ResultCodeEnum {
  Succes = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}


type UserType = {
  id: number
  name: string
  status: string
  photos: { small: string, large: string }
  followed: boolean
}

type GetUsersType = {
  items: Array<UserType>
  totalCount: number
  error: string
}



type FollowUserType = {
  followed: boolean
}

type UnFollowUserType = {
  followed: boolean
}
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return insteance
      .get<GetUsersType>(`/users`, 
      {params: {
        page: currentPage, 
        count: pageSize
      }})
      .then((response) => response.data);
  },

  setUser(userid: number) {
    return insteance.get<ProfileType>(`profile/${userid}`).then((response) => response.data);
  },

  followUser(id: number) {
    return insteance.post<FollowUserType>(`follow/${id}`).then((response) => response.data);
  },

  unfollowUser(id: number) {
    return insteance.delete<UnFollowUserType>(`follow/${id}`).then((response) => response.data);
  },
};

type UpdateStatusType = {
  data: any
  resultCode: ResultCodeEnum
  messages: string[]
}

type PhotoType = {
  photos: { small: string, large: string }
}

type SavePhotoType = {
  data: PhotoType
}


type SaveProfile = {
  data: {}
  messages: []
  resultCode: ResultCodeEnum
}
export const profileAPI = {
  getProfile(userid: number | null) {
    return insteance
      .get<ProfileType>(`/profile/${userid}`)
      .then((response) => response.data);
  },

  getStatus(userid: number | null) {
    return insteance.get<string>(`/profile/status/${userid}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status: string) {
    return insteance
      .put<UpdateStatusType>(`/profile/status`, {
        status,
      })
      .then((response) => {
        return response.data;
      });
  },

  saveProfilePhoto(profilePhoto: File) {
    var formData = new FormData();
    formData.append("image", profilePhoto);
    return insteance
      .put<SavePhotoType>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },

  saveProfileUser(profileData: any) {
    return insteance
      .put(`profile`, profileData)
      .then((response) => response.data);
  },
};


type MeResponseType = {
  data: { id: number, email: string, login: string }
  resultCode: ResultCodeEnum
  messages: string[]
}

type LoginResponseType = {
  data: { userId: number }
  resultCode: ResultCodeForCaptcha | ResultCodeEnum
  messages: string[]
}

export const authAPI = {
  me() {
    return insteance.get<MeResponseType>("auth/me").then((response) => response.data);
  },

  signIn(email: string, password: string, rememberMe: boolean, captcha: string | null) {
    return insteance
      .post<LoginResponseType>(`/auth/login`, {
        email,
        password,
        rememberMe,
        captcha
      })
      .then((response) => response.data);
  },

  signOut() {
    return insteance.delete(`auth/login`).then((response) => response.data);
  },
};


export const securityAPI = {
  getCaptcha() {
    return insteance.get('security/get-captcha-url').then(response => response.data)
  }
}