import React from 'react';
import {CounterType} from '../App';
import {Button} from './Button';
import {Input} from './Input';

export const SetCounter = ({getResetCounter, getIncreaseCounter, counter, maxValue, minValue, startValue, maxInputValue, setMaxValue, setStartValue, setValues, setIsFocused, isFocused}: CounterType) => {

    const disabledButtonSet = counter === startValue || startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const negativNumberStartValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const negativNumberMaxValue = maxInputValue < 0 || startValue === maxInputValue || startValue > maxInputValue;



    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>max value: </span>
                    <Input
                        newInputValue={maxInputValue}
                        setNewInputValue={setMaxValue}
                        isFocused={isFocused}
                        setIsFocused={setIsFocused}
                        className={negativNumberMaxValue ? 'negativ-number-input' : 'input'}
                    />
                </div>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>start value: </span>
                    <Input
                        newInputValue={startValue}
                        setNewInputValue={setStartValue}
                        isFocused={isFocused}
                        setIsFocused={setIsFocused}
                        className={negativNumberStartValue ? 'negativ-number-input' : 'input'}
                    />
                </div>
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    callBack={setValues}
                    isDisabled={disabledButtonSet}
                    className={disabledButtonSet ? 'disabledButton' : 'activeButton'}
                    title={'set'}
                />
            </div>
        </div>
    );
};

