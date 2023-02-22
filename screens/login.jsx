import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

// Context
import AuthContext from '../contexts/auth';

const Login = () => {
  const navigation = useNavigation();
  const { setIsLogin } = useContext(AuthContext);
  const [username, setUserName] = useState('pierre');
  const [password, setPassword] = useState('******');
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleLogin = () => {
    setVisible(true);
    setTimeout(() => {
      setIsLogin(true);
      navigation.navigate('Home');
    }, 3000);
  };

  return (
    <>
      <View>
        Salut {username}
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button mode="contained" onPress={handleLogin}>
          Login
        </Button>
      </View>
      <View style={styles.container}>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Déconnectez-vous',
            onPress: () => {
              setIsLogin(false);
              navigation.navigate('Login');
            },
          }}
        >
          Félicitation {username}, tu es connecté !
        </Snackbar>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 5,
  },
});
