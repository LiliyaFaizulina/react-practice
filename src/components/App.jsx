// import { User } from "./User/User";
import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
// import { Section } from "./Section/Section";
import { Component } from "react";
import { Button } from "./Button/Button";
import { AddUserForm } from "./AddUserForm/AddUserForm";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    users,
    isListShown: false
  }

  showUserList = () => {
    this.setState({isListShown: true})
  }

  deleteUser = userId => {
    this.setState(prevState => ({ users: prevState.users.filter(user => user.id !== userId) }))
  }

  changeJobStatus = userId => {
    this.setState(prevState => ({users: prevState.users.map(user=>user.id !== userId? user: {...user, hasJob: !user.hasJob})}))
  }

  addUser = data => {
    const newUser = {
      ...data,
      hasJob: false,
      id: nanoid(),
    }
    this.setState(prevState=>({users: [...prevState.users, newUser]}))
  }

  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        
        {isListShown ?
          <>
            <AddUserForm addUser={this.addUser} />
            <UserList users={users} deleteUser={this.deleteUser} changeJobStatus={this.changeJobStatus} />
          </>
          : <Button
            type='button'
            text='Show users list'
            clickHandler={this.showUserList}
          />
        }
    </>
  );
  }
  
};