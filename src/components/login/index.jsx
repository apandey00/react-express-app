
import React, { useContext, useState } from 'react';
import { UserContext } from '../../userContext/userContext';

function Index() {
  const { userObj, login } = useContext(UserContext);

  const [userObjState, setUserObj] = useState(userObj);
  const [hasError, setHasError] = useState(false);


  const handleSubmit = () => {
    if (userObjState.user_name || !userObjState.password)
      setHasError(true);
    else
      login(userObj);
  }
  return (
    <div>
      <input
        onChange={(e) => setUserObj({ ...userObj, [e.target.name]: e.target.value })}
        placeholder="Enter User Name"
        name="user_name" type='text' />
      <input placeholder="Enter Password" name="password" type="password" />
      {hasError ? <>Enter Valid Details</> : null}
      <button onClick={() => handleSubmit}>Login</button>
    </div>
  )
}

export default Index;