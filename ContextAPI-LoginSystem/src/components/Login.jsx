import React ,{useState,useContext} from 'react';
import userContext from '../context/userContext';


function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser}=useContext(userContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});

    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text'
         value={username} 
         onChange={(e)=>setUserName(e.target.value)} 
        placeholder='Username'/>

      <input type='text'
       value={password}
        onChange={(e)=>setPassword(e.targe.value)}
         placeholder='Password'/>

      <button type='submit' onClick={handleSubmit}></button>
      
    </div>
  )
}

export default Login;
