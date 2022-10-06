import { Component } from "react";
import PropTypes from "prop-types";

export class AddUserForm extends Component {
    state = {
        name: '',
        email: '',
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired
    }

    handleNameInput = ({target: { name, value }}) => {
        this.setState({[name]: value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '',
        email: '',})
    }

    render() {
        const { name, email } = this.state;
        return (<form onSubmit={this.onSubmit}>
            <label>
                Name
                <input type="text" name="name" value={name} onChange={this.handleNameInput} />
            </label>
            <label>
                Email
                <input type="text" name="email" value={email} onChange={this.handleNameInput} />
            </label>
            <button type="submit">Add user</button>
        </form>)
    }
}