import PropTypes from "prop-types";
import { User } from "../User/User";

export const UserList = ({ users, deleteUser, changeJobStatus }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} deleteUser={deleteUser} changeJobStatus={changeJobStatus} />
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired
}