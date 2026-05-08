import react from 'react';
import {View, Text} from 'react-native';
import { styles } from "./src/stylesheet/style";
import { Head } from './src/screen/head.js';
import { Body } from './src/screen/body.js';
import { Foot } from './src/screen/foot.js';


function App() {
  return(
   <View style={styles.background}>
    <Head/>
    <Body/>
    <Foot/>
   </View>
  );
}
export default App;