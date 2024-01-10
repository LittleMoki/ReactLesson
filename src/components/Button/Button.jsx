import React, {useState} from 'react';
import styles from './Button.module.css'

function Button({children, isActive, ...props}) {
    return (
        <button {...props}
                className={isActive ? `${styles.button} ${styles.active}` : `${styles.button}`}
        >{children}</button>
    );
}

export default Button;