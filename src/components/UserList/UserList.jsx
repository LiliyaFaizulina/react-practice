import PropTypes from "prop-types";
import { User } from "../User/User";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired
}