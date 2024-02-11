import React, {useContext} from 'react';
import userContext from '../context/userContext';


function Profile() {
const {user}=useContext(userContext);
if(!user) return <div>Please Login</div>


return <div>
      <h2>Welcome {user.username}</h2>
    </div>
  
}

export default Profile;
