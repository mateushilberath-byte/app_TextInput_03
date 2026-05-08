import React, { useState } from 'react';
import {View, Text, Image, TouchableHighlight, TextInput, Alert} from 'react-native';
import { styles } from '../stylesheet/style';

const Names = ['Tony Soprano', 
        'Randy Random',
        'Medic',
        '2-D',
        'Acrid',
        'Dominus Thrax',
        'Teeth',
        'Travis Touchdown',
        'Adam the Clown'
    ]
    const GuessImg = [require('../../img/guess/img1.png'),
        require('../../img/guess/img2.png'),
        require('../../img/guess/img3.png'),
        require('../../img/guess/img4.png'),
        require('../../img/guess/img5.png'),
        require('../../img/guess/img6.png'),
        require('../../img/guess/img7.png'),
        require('../../img/guess/img8.png'),
        require('../../img/guess/img9.png')
    ]
    const RevealImg = [require('../../img/reveal/img1.png'),
        require('../../img/reveal/img2.png'),
        require('../../img/reveal/img3.png'),
        require('../../img/reveal/img4.png'),
        require('../../img/reveal/img5.png'),
        require('../../img/reveal/img6.png'),
        require('../../img/reveal/img7.png'),
        require('../../img/reveal/img8.png'),
        require('../../img/reveal/img9.png')
    ]
    
function Body() {

    const [copynames, setCopyNames] = useState([...Names]);
    const [Index, setIndex] = useState(Math.floor(Math.random() * copynames.length));
    const [imgGuess, setImgGuess] = useState(GuessImg[Index]);
    const [Answer, setAnswer] = useState(Names[Index]);
    const [AnswerInput, setInput] = useState('');
    const [CorrectGuess, setGuess] = useState(false);
    const [IsGameOver, setGameOver] = useState(false);
    const [WinCounter, setWinCounter] = useState(0);
    const [LoseCounter, setLoseCounter] = useState(0);

    function CheckGuess() {
        if (AnswerInput == Answer) {
            setImgGuess(RevealImg[Index]);
            setGuess(true);
            setWinCounter(prev => prev+1);
        }
        else if (CorrectGuess == true) {
        Alert.alert('Você já adivinhou, passe para o próximo personagem!')
        }
    }
    function ChangeChar() {
        const NewCopy = copynames.filter((_, i) => i !== Index)
        if (WinCounter + LoseCounter == Names.length) {
            setGameOver(true);
        }
        const nextIndex = Math.floor(Math.random() * NewCopy.length);
        setIndex(nextIndex);
        if (CorrectGuess == true) {
            setImgGuess(GuessImg[nextIndex]);
            setAnswer(copynames[nextIndex]);
            setGuess(false);
        }
        else {
            setLoseCounter(prev => prev+1);
            setImgGuess(GuessImg[nextIndex]);
            setAnswer(copynames[nextIndex]);
        }
        setInput('');
    }
    
    return(
        <View id='body' style={styles.body}>
            <Text style={{fontSize: 23, paddingVertical: 20}}>Advinhe o personagem.</Text>
            <Image style={styles.img} source={imgGuess}/>
            <TextInput style={styles.input}
            onChangeText={setInput}
            value={AnswerInput}
            placeholder= 'quem é este?'
            />
            <TouchableHighlight id='guess' onPress={CheckGuess}>
                <View style={styles.btn}>
                    <Text>ADIVINHE</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight id='next' onPress={ChangeChar}>
                <View style={styles.btn2}>
                    <Text>PRÓXIMO</Text>
                </View>
            </TouchableHighlight>
        </View>   
    );
}
export {Body};