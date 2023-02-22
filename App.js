import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContextProvider } from './contexts/auth';
import Main from './layout/main';

export default function App() {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
