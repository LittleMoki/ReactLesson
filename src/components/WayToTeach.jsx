import React from 'react';
import {ways} from "../data.js";

function WayToTeach() {
    return (
        <ul>
            {ways.map((item, index) => {
                return (
                    <li key={index}>
                        <p>
                            <strong>{item.title}</strong>
                            {item.description}
                        </p>
                    </li>
                )
            })}
        </ul>
    );
}

export default WayToTeach;