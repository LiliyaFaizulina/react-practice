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

  updateUser = updatedUser => {
    const idx = this.state.users.findIndex(user => user.id === updatedUser.id)
    const users = [...this.state.users];
    users.splice(idx, 1, updatedUser);
    this.setState({
      users,
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
    const {state: {isListShown, users, userToUpdate }, addUser, deleteUser, changeJobStatus, showUpdateForm, updateUser, showUserList} = this;
    return (
      <>
        
        {isListShown ?
          <>
            <AddUserForm addUser={addUser} />
            <UserList
              users={users}
              deleteUser={deleteUser}
              changeJobStatus={changeJobStatus}
              showUpdateForm={showUpdateForm}
              userToUpdate={userToUpdate}
              updateUser={updateUser}
            />
          </>
          : <Button
            type='button'
            text='Show users list'
            clickHandler={showUserList}
          />
        }
    </>
  );
  }
  
};