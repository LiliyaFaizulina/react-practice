import PropTypes from "prop-types";
import { Text, Span, Button } from './User.styled';
import { UpdateUserForm } from '../UpdateUserForm/UpdateUserForm';

export const User = ({ user: { name, email, id, hasJob }, deleteUser, changeJobStatus, showUpdateForm, userToUpdate, updateUser }) => {
  const isOrange = email.includes('biz')
  return (
    <>
      <Text>Name: <Span>{name}</Span></Text>
      <Text>Email: <Span isOrange={isOrange}>{email}</Span></Text>
      <Text>Has job: <Span>{hasJob.toString()}</Span></Text>
      <Button onClick={() => deleteUser(id)}>Delete</Button>
      <Button onClick={() => changeJobStatus(id)}>Change job status</Button>
      <Button onClick={() => showUpdateForm(id)}>Update user</Button>
      {userToUpdate && userToUpdate.id === id && <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />}
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};