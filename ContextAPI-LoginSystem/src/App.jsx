import './App.css'
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import userContextProvider from './context/userContextProvider';

function App() {
  

  return (
    <userContextProvider>

       
     <h1>React With Context API</h1>
     <Login/>
     <Profile/>

    </userContextProvider>
   

    
  )
}

export default App
