import React, { useState } from 'react';
import {View, Text, Image, TouchableHighlight, TextInput} from 'react-native';
import { styles } from '../stylesheet/style';

function Body() {
    let Names = ['Tony Soprano', 
        'Randy Random',
        'Medic',
        '2-D',
        'Acrid',
    ]
    let GuessImg = ['./img/guess/img1.png',
        './img/guess/img2.png',
        './img/guess/img3.png',
        './img/guess/img4.png',
        './img/guess/img5.png'
    ]
    let RevealImg = ['./img/reveal/img1.png',
        './img/reveal/img2.png',
        './img/reveal/img3.png',
        './img/reveal/img4.png',
        './img/reveal/img5.png'
    ]
    let copynames = [...Names];
    
    let NumInit = Math.floor(Math.random() * Names.length);
    let IsCorrect = false;
    let AnswerInput;
    let WinCounter = 0;
    let LoseCounter= 0;
    let GameOver = false;

    const [imgGuess, setImgGuess] = useState(GuessImg[NumInit]);
    const [Answer, setAnswer] = useState(Names[NumInit]);

    function CheckGuess() {
        if (AnswerInput == Answer) {
            setImgGuess(RevealImg[NumInit]);
            IsCorrect = true;
            WinCounter++;
        }
        else if (IsCorrect == true) {
        alert('Você já adivinhou, passe para o próximo personagem!')
        }
    }
    function ChangeChar() {
        let splicename = copynames.splice(NumInit)[0];
        NumInit = Math.floor(Math.random() * copynames.length);
        if (IsCorrect == true) {
            setImgGuess(GuessImg[NumInit]);
            setAnswer(Names[NumInit]);
            IsCorrect = false;
        }
        else {
            LoseCounter++;
            setImgGuess(GuessImg[NumInit]);
            setAnswer(copynames[NumInit]);
        }
    }
    function CheckGameOver() {
        if ((WinCounter + LoseCounter) == Names.length) {
            GameOver = true;
        }
    }
    return(
        <View id='body' style={styles.body}>
            <Text>TEST</Text>
        </View>   
    );
}
export {Body};