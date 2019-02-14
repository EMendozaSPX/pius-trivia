import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Paper, Typography, Select, InputLabel } from '@material-ui/core'

const entry = document.getElementById('app');

const synth = window.speechSynthesis;

let voices = [];
let voiceOp = voices.map(voice => {
    <option data-lang={voice.lang} data-name={voice.name}>{voice.name} ({voice.lang})</option>;
})
const getVoices = () => {
    voices = synth.getVoices();
}

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschange = getVoices;
}

class App extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <Typography variant="h5" component="h3">
                        The Pius Trivia game
                    </Typography>
                    <Button variant="contained">
                        start
                    </Button>
                    <InputLabel htmlFor="voices-list">Voice Select</InputLabel>
                    <Select
                        native
                        value={}
                        onChange={}
                        inputProps={{
                            name: 'voices',
                            id: 'voices-list'
                        }}
                    >
                        {voiceOp}
                    </Select>
                </Paper>
            </div>
        );
    }
}

ReactDOM.render(<App />, entry);
