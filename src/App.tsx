import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {SetCounter} from './components/SetCounter';

export type CounterType = {
    getIncreaseCounter: (counter: number) => void
    getResetCounter: () => void
    counter: number
    minValue: number
    maxValue: number
    maxInputValue: number
    startValue: number
    setMaxValue: (maxInputValue: number) => void
    setStartValue: (startValue: number) => void
    setValues: () => void
}


function App() {

    let minValue = 0;
    let maxValue = 5;

    const [maxInputValue, setMaxValue] = useState<number>(maxValue)
    const [startValue, setStartValue] = useState<number>(minValue)
    const [counter, setCounter] = useState(startValue)


    useEffect(() => {
        let startValueAsString = localStorage.getItem('start value');
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString);
            setStartValue(newStartValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('max value', JSON.stringify(maxInputValue));
        localStorage.setItem('start value', JSON.stringify(startValue));
    }, [maxInputValue, startValue])


    const setValues = () => {
        setStartValue(startValue)
        setMaxValue(maxInputValue)
    }


    const getIncreaseCounter = (counter: number) => {
        setCounter(counter + 1)
        console.log(counter)
        }

    const getResetCounter = () => {
        setCounter(startValue)
    }


    return (
        <div className="App">

            <SetCounter
                getIncreaseCounter={() => {
                }}
                getResetCounter={() => {
                }}
                counter={counter}
                minValue={minValue}
                maxValue={maxValue}
                maxInputValue={maxInputValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setValues={setValues}
            />

            <Counter
                getIncreaseCounter={getIncreaseCounter}
                getResetCounter={getResetCounter}
                counter={counter}
                maxValue={maxValue}
                minValue={minValue}
                maxInputValue={maxInputValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setValues={setValues}
            />

        </div>
    );
}

export default App;
