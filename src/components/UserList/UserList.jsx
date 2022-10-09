import PropTypes from "prop-types";
import { User } from "../User/User";
import styles from "./UserList.module.css";

export const UserList = ({ users, deleteUser, changeJobStatus, showUpdateForm, userToUpdate, updateUser }) => {
  return (
    <ul className={styles.userList}>
      {users.map((user) => {
        return (
          <li className={styles.userItem} key={user.id}>
            <User
              user={user}
              deleteUser={deleteUser}
              changeJobStatus={changeJobStatus}
              showUpdateForm={showUpdateForm}
              userToUpdate={userToUpdate}
              updateUser={updateUser}
            />
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired
}