import React, {useState} from 'react';
import Button from "./Button/Button.jsx";
import {differences} from "../data.js";

function Differences() {
    let [contentType, setContentType] = useState('way')
    function handleClick(type) {
        setContentType(type)
    }
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button isActive={contentType === 'way'}
                    onClick={() => handleClick('way')}>Подход</Button>
            <Button isActive={contentType === 'easy'}
                    onClick={() => handleClick('easy')}>Доступность</Button>
            <Button isActive={contentType === 'program'}
                    onClick={() => handleClick('program')}>Концентрация</Button>

            <p>{differences[contentType]}</p>
        </section>
    );
}

export default Differences;