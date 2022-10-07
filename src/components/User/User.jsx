import PropTypes from "prop-types";
import { Text, Span } from './User.styled';
import { UpdateUserForm } from '../UpdateUserForm/UpdateUserForm';

export const User = ({ user: { name, email, id, hasJob }, deleteUser, changeJobStatus, showUpdateForm, userToUpdate, updateUser }) => {
  const isOrange = email.includes('biz')
  return (
    <div>
      <Text>Name: <Span>{name}</Span></Text>
      <Text>Email: <Span isOrange={isOrange}>{email}</Span></Text>
      <Text>Has job: <Span>{hasJob.toString()}</Span></Text>
      <button onClick={() => deleteUser(id)}>Delete</button>
      <button onClick={() => changeJobStatus(id)}>Change job status</button>
      <button onClick={() => showUpdateForm(id)}>Update user</button>
      {userToUpdate && userToUpdate.id === id && <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />}
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};