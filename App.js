import { StyleSheet } from 'react-native';
import MainDrawer from './src/components/MainDrawer';

export default function App() {
  return (
    <>

      <MainDrawer />
    </>
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
