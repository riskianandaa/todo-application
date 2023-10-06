import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import AuthStackNavigator from "./auth-stack-navigatot";
import AppStackNavigator from "./app-stack-navigator";
import useUserGlobalStore from "@/store/useUserGlobalStore";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore()

  console.log('user', JSON.stringify(user, null, 2))

  useEffect(() => {
    // jika data tidak null
    // updateUser({
    //   email: 'testing@gmail.com',
    //   name: 'testing'
    // })
    updateUser(null)
    return () => {}
  }, [])

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator /> }
    </NavigationContainer>
  );
};

export default Navigation;
