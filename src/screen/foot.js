import react from 'react';
import {View, Text} from 'react-native';
import { styles } from '../stylesheet/style';

function Foot() {
    return(
        <View style={styles.foot}>
            <Text style={{fontWeight:'bold',
                fontSize: 19,
                color: 'white'
            }}>
                Mateus Hilberath Costa
            </Text>
            <Text style={{fontSize: 17,
                color: 'white'
            }}>
                08/05/26
            </Text>
        </View>
    );
}
export {Foot};