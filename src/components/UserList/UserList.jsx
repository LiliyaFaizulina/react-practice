import PropTypes from "prop-types";
import { User } from "../User/User";

export const UserList = ({ users, deleteUser, changeJobStatus, showUpdateForm, userToUpdate, updateUser }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
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