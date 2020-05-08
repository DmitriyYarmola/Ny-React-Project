import React from "react";
import style from "./users.module.css";
import UserItem from "./userItem/UserItem";
import userPhoto from "./../../assets/img/user.png";
import Paginator from "../common/paginator/paginator";
import { UserType } from "../../redux/types/user";
import { PropsType } from "./../../components/common/paginator/paginator"

type UsersType = {
  users: Array<UserType>
  follow: (userid: number) => void
  unfollow: (userid: number) => void
  followingInProgress: Array<number | null>
  totalItemsCount: number
  pageSize: number
  currentPage: number | null
  onSetCurrentPage: (pageNumber:number) => void
  portionSize: number 
}

let Users: React.FC<UsersType> = ({ users, follow, unfollow, followingInProgress, ...props}) => {
  let usersList = users.map(u => {
    return (
      <UserItem
        key={u.id}
        name={u.name}
        status={u.status}
        photoUrl={u.photos.small != null ? u.photos.small : userPhoto}
        followed={u.followed}
        id={u.id}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    );
  });

  return (
    <div className={style.users}>
      <Paginator {...props} />
      {usersList}
    </div>
  );
};

export default Users;
