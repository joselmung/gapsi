import React ,{useState,useEffect} from 'react';
import homeStyle from '../resources/styles/home.module.css';
import {User as userService} from '../services';
import UserWelcome from '../components/user/UserWelcome';
import {Redirect} from "react-router-dom"
const Home = () =>{
    const [user,setUser] = useState({});
    const [redirect,setRedirect] = useState(false);
    
    useEffect(()=>{

        initial();
        
    },[]);

    const initial =  async () =>{
      const data = await userService.getAll(); 
      data.welcome = formatWelcome(data.welcome);
      setUser(data);
    }

    const formatWelcome = welcome =>{
         return welcome.replace('Hola,','Bienvenido');
    }

    const handleClick = () =>{
        setRedirect(true);
    }
    
    return (
      <div className={homeStyle.container}>
        {redirect ? (
          <Redirect to="/store" />
        ) : (
          <div>
            <UserWelcome user={user}></UserWelcome>
            <div className={homeStyle.continue}>
              <button className={homeStyle.button} onClick={handleClick}>
                Continuar
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default Home;