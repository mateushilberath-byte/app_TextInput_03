import react from 'react';
import {View, Text} from 'react-native';
import { styles } from "./src/stylesheet/style";
import { Head } from './src/screen/head.js';


function App() {
  return(
   <View style={styles.background}>
    <Head/>
   </View>
  );
}
export default App;