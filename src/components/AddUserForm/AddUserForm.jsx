import { Component } from "react";
import PropTypes from "prop-types";
import styles from './AddUserForm.module.css'

export class AddUserForm extends Component {
    state = {
        name: '',
        email: '',
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired
    }

    handleInput = ({target: { name, value }}) => {
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '',
        email: '',})
    }

    render() {
        const { state: {name, email}, handleSubmit, handleInput } = this;
        return (<form className={styles.addUserForm} onSubmit={handleSubmit}>
            <label className={styles.addFormLabel}>
                Name
                <input className={styles.addFormInput} type="text" name="name" value={name} onChange={handleInput} />
            </label>
            <label className={styles.addFormLabel}>
                Email
                <input className={styles.addFormInput} type="text" name="email" value={email} onChange={handleInput} />
            </label>
            <button className={styles.addBtn} type="submit">Add user</button>
        </form>)
    }
}