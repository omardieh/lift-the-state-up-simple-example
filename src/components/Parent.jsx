import { useState } from "react";
import Child from "./Child";

const users = [
  { id: 1, username: "Bob" },
  { id: 2, username: "Sarah" },
  { id: 3, username: "Anna" },
];

function Parent() {
  const [activeUserID, setActiveUserID] = useState(null);
  //   console.log(activeUserID);
  return (
    <div>
      {users.map((user) => (
        <Child
          setActiveUserID={setActiveUserID}
          activeUserID={activeUserID}
          key={user.id}
          {...user}
        />
      ))}
    </div>
  );
}

export default Parent;
