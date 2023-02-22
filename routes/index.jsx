import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

// Context
import AuthContext from '../contexts/auth';

// Screens
import Home from '../screens/home';
import Login from '../screens/login';
import Profil from '../screens/profil';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: true,
};

const Routes = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionStyle}
        initialRouteName={isLogin ? 'Home' : 'Login'}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
