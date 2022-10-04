import PropTypes from "prop-types";
import {Text, Span} from './User.styled'
export const User = ({ user: { name, email } }) => {
  const isOrange = email.includes('biz')
  return (
    <div>
      <Text>Name: <Span>{name}</Span></Text>
      <Text>Email: <Span isOrange={isOrange}>{email}</Span></Text>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};