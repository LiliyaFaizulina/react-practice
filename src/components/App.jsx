import { User } from "./User/User";
import { users } from "../data/users";
import { UserList } from "./UserList/UserList";
import { Section } from "./Section/Section";

export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="Users list">
        <UserList users={users} />
      </Section>
    </>
  );
};