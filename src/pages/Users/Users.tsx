import React, { useEffect, useState } from "react";
import UserItem from "../../components/UserItem/UserItem";
import { getUsers } from "../../firebaseConfig/firebase";
import { User } from "../../types/User";

import styles from './Users.module.scss'

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data: any) => {
      if (data) {
        setUsersList(data);
        setIsLoading(false);
      }
    });
  }, []);

  return !isLoading ? (
    <div className={styles.users}>
      {usersList.map((e: User, index) => (
        <UserItem
          firstName={e.firstName}
          lastName={e.lastName}
          about={e.about}
          city={e.city}
          phone={e.phone}
          index={index + 1}
        />
      ))}
    </div>
  ) : (
    <div className={styles.loading}>Loading...</div>
  );
};

export default Users;
