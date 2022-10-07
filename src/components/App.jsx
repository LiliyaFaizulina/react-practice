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
    isListShown: false,
    userToUpdate: {}
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

  showUpdateForm = userId => {
    const userToUpdate = this.state.users.find(user=>user.id === userId)
    this.setState({
      userToUpdate
    })
  }

  updateUser = user => {
    const idx = this.state.users.findIndex(u => u.id === user.id)
    const updateUsers = [...this.state.users];
    updateUsers.splice(idx, 1, user);
    this.setState({
      users: updateUsers,
      userToUpdate: {}
    })
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
    const { isListShown, users, userToUpdate } = this.state;
    return (
      <>
        
        {isListShown ?
          <>
            <AddUserForm addUser={this.addUser} />
            <UserList
              users={users}
              deleteUser={this.deleteUser}
              changeJobStatus={this.changeJobStatus}
              showUpdateForm={this.showUpdateForm}
              userToUpdate={userToUpdate}
              updateUser={this.updateUser}
            />
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