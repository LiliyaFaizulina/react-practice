import { Component } from "react";
import PropTypes from "prop-types";

export class UpdateUserForm extends Component {
    state = {
        name: this.props.userToUpdate.name,
        email: this.props.userToUpdate.email,
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired
    }

    handleChange = ({target: { name, value }}) => {
        this.setState({[name]: value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.updateUser({ ...this.props.userToUpdate, ...this.state });
        
    }


    render() {
        const { name, email } = this.state;
        return (<form onSubmit={this.onSubmit}>
            <label>
                Name
                <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
            <label>
                Email
                <input type="text" name="email" value={email} onChange={this.handleChange} />
            </label>
            <button type="submit">Add user</button>
        </form>)
    }
}