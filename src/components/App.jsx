// import { User } from "./User/User";
import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
// import { Section } from "./Section/Section";
import { Component } from "react";
import { Button } from "./Button/Button";

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

  render() {
    const { isListShown, users } = this.state;
    return (
      <>
        {isListShown ?
          <UserList users={users} deleteUser={this.deleteUser} changeJobStatus={this.changeJobStatus} />
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