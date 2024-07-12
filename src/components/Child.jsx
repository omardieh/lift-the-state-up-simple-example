function Child({ username, id, setActiveUserID, activeUserID }) {
  console.log(id, activeUserID);
  // 1, null
  // 2, null
  // 3, null

  // 1 === 1 => true
  // 2 === 1 => false
  // 3 === 1 => false

  // 1 === 2 => false
  // 2 === 2 => true
  // 3 === 2 => false

  return (
    <h2
      onClick={() => {
        setActiveUserID(id);
      }}
    >
      hello, {activeUserID === id ? username.toUpperCase() : username}
    </h2>
  );
}

export default Child;
