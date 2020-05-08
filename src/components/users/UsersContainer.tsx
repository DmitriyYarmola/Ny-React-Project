import React, { useEffect, useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { actions, requestUsers, follow, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

const UsersComponent:React.FC = () => {

  /* ===UseSelector=== */
  const users = useSelector((state: AppStateType) => state.usersPage.users)
  const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize)
  const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage)
  const totalItemsCount = useSelector((state: AppStateType) => state.usersPage.totalItemsCount)
  const portionSize = useSelector((state: AppStateType) => state.usersPage.portionSize)
  const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching)
  const followingInProgress = useSelector((state: AppStateType) => state.usersPage.followingInProgress)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()

  const requestUsersCB = useCallback((currentPage: number, pageSize: number) => {
    dispatch(requestUsers(currentPage, pageSize))
  }, [dispatch])

  const setCurrentPageCB = useCallback((pageNumber: number) => {
    dispatch(actions.setCurrentPage(pageNumber))
  }, [dispatch])

  const unfollowCB = useCallback((id: number) => {
    dispatch(unfollow(id))
  }, [dispatch])

  const followCB = useCallback((id: number) => {
    dispatch(follow(id))
  }, [dispatch])

  useEffect(() => {
    requestUsersCB(currentPage, pageSize)
  }, [])

  const onSetCurrentPage = (pageNumber: number) => {
    setCurrentPageCB(pageNumber);

    requestUsersCB(pageNumber, pageSize);
  };

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        currentPage={currentPage}
        onSetCurrentPage={onSetCurrentPage}
        totalItemsCount={totalItemsCount}
        portionSize={portionSize}
        pageSize={pageSize}
        users={users}
        follow={followCB}
        unfollow={unfollowCB}
        followingInProgress={followingInProgress}
      />
    </>
  );
}


export default compose(
  withAuthRedirect
)(UsersComponent);
