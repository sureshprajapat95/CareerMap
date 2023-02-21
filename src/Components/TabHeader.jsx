import React, {useContext} from 'react';
import {AuthContext} from '../Context/auth-context';
import {Colors} from '../Utils/Colors';
import Hamburger from '../Utils/Icons/Hamburger';
import Login from '../Utils/Icons/Login';
import Logout from '../Utils/Icons/Logout';
import AppHeader from './AppHeader';

function TabHeader({leftClick,navigation,title}) {
  const {isAuthenticated,logout} = useContext(AuthContext);

  
  const handleRightClick = () => {
    if(isAuthenticated){
        logout()
    }else{
      navigation.navigate('login');
    }
  }
  
  return (
    <AppHeader
      style={{backgroundColor: Colors.light}}
      middleText={title}
      left={{
        show: true,
        Icon: Hamburger,
        click: leftClick,
      }}
      right={{
        show: true,
        Icon: isAuthenticated ? Logout : Login,
        click: handleRightClick,
      }}
    />
  );
}

export default TabHeader;
