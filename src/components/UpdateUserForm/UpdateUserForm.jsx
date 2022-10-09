import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./UpdateUserForm.module.css";

export class UpdateUserForm extends Component {
    state = {
        name: this.props.userToUpdate.name,
        email: this.props.userToUpdate.email,
    }

    static propTypes = {
        updateUser: PropTypes.func.isRequired,
        userToUpdate: PropTypes.object.isRequired
    }

    handleChange = ({target: { name, value }}) => {
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateUser({ ...this.props.userToUpdate, ...this.state });
        
    }


    render() {
        const { state: {name, email}, handleChange, handleSubmit } = this;
        return (<form className={styles.updateForm} onSubmit={handleSubmit}>
            <label>
                Name
                <input className={styles.updateFormInput} type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <label>
                Email
                <input className={styles.updateFormInput} type="text" name="email" value={email} onChange={handleChange} />
            </label>
            <button className={styles.updateFormBtn} type="submit">Save changes</button>
        </form>)
    }
}