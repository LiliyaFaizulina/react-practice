import PropTypes from "prop-types";
export const User = ({ user: { name, email } }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};