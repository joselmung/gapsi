import React from 'react';
import userStyle from '../../resources/styles/userWelcome.module.css'
import logo from '../../resources/images/logo.jpg'
import { Button } from '@material-ui/core';

const UserWelcome = ({user}) =>{

 

    return (
      user && <div className={userStyle.container}>
        <div className={userStyle.header}>
          <div className={userStyle.logo}>
            <img src={logo}></img>
          </div>
        </div>
        <div className={userStyle.body}>
          <div className={userStyle.title}>
             {user.welcome}
          </div>
          
        </div>
      </div> 
    );
}


export default UserWelcome;