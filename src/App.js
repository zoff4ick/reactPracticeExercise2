import React, {Component} from 'react';
import './App.css';
import Input from './Input/Input'
import './Input/Input.css';
import CharBlock from './CharBlock/CharBlock'
import './CharBlock/CharBlock.css'



class App extends Component {
    state = {
        word: '',
        words:null,
        lengthText:'Your String Is Too Short'
    };

    changeWordState = (event) => {
        const value = event.target.value;
        this.setState({
            word: value,
            lengthText:(value.length <= 3) ? 'Your String Is Too Short' : (value.length>8) ? 'Your String Is Too Long' : '',
            words: value.toUpperCase().split(''),
        });
    };

    assignWordsArrayValue = (words) => {
        this.setState({words: words});
    };

    deleteCharBlock = (charIndex) => {
        console.log(charIndex);
        // const persons = this.state.persons.slice();
        const words = [...this.state.words];
        words.splice(charIndex, 1);
        this.setState({words: words, word:words.join(''), lengthText:(words.length <= 3) ? 'Your String Is Too Short' : (words.length>8) ? 'Your String Is Too Long' : '',});
    };
    render() {
        let charBlocks = null;
        if(this.state.word){
            charBlocks =(
                <div>
                    { this.state.words.map((word, index) => {
                        return <CharBlock text={word} deleteMe={()=>{this.deleteCharBlock(index)}}/>
                    })}
                </div>
            )
        }
        return (
            <div className="App">
                <Input word={this.state.word} changed={this.changeWordState}/>
                <p>{this.state.lengthText}</p>
                {charBlocks}
            </div>
        );
    }
}

export default App;
