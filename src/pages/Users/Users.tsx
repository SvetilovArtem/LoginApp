import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserItem from "../../components/UserItem/UserItem";
import { getUsers } from "../../firebaseConfig/firebase";
import { AppDispatch, RootState } from "../../redux/store";
import { setUsersListFromFirebase } from "../../redux/userSlice";
import { User } from "../../types/User";

import styles from './Users.module.scss'

const Users = () => {

  const [usersIdList, setUsersIdList] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const dispatch:AppDispatch = useDispatch()
  const usersListFromFirebase = useSelector((state:RootState) => state.user.usersListFromFirebase)
  let users = usersListFromFirebase.map((user: any, index: number) => ({ ...user, id: usersIdList[index]}))

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data:any) => {
      if (data) {
        dispatch(setUsersListFromFirebase(data.usersList))
        setUsersIdList(data.usersIdList)
        setIsLoading(false);
      }
    });
  }, [dispatch]);
  

  return !isLoading ? (
    <div className={styles.users}>
      {users.map((e: User, index: number) => (
        <UserItem
          firstName={e.firstName}
          lastName={e.lastName}
          about={e.about}
          city={e.city}
          phone={e.phone}
          index={index + 1}
          id={e.id}
          key={index}
          dispatch={dispatch}
          users={users}
        />
      ))}
    </div>
  ) : (
    <div className={styles.loading}>Loading...</div>
  );
};

export default Users;
