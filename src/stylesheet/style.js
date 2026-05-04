import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57b4cf',
        flexDirection:'column'
    },
    head: {
        backgroundColor: '#101aab',
        height: 250,
        width: '95%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '2%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        fontSize: 25,
        color: 'white'
    },
    body: {
        backgroundColor:'#2a61d7',
        height: '60%',
        width: '95%',
        alignContent: 'center',
        borderRadius: 10
    },
    foot: {
        backgroundColor: '#1c1c1c',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img: {
        width: 300,
        height: 300
    },
    btn: {
    width: 70,
    height: 50,
    borderWidth: 3
    }
})
export { styles };