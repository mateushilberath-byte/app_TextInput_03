import react from "react";
import {View, Text} from 'react-native';
import { styles } from "../stylesheet/style";

 function Head() {
    return(
        <View id='head' style={styles.head}>
            <Text id='subtitle' style={styles.subtitle}>
                Capítulo 06 - Componentes UI
            </Text>
            <Text id='title' style={styles.title}>
                TouchableHighlight || TextInput
            </Text>
        </View>
    );
}
export { Head };  