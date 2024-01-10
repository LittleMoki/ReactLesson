import React, {useEffect, useState} from 'react';
import logo from '/logo-name.svg'

function Header() {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)
        return () => {
            clearInterval(interval)
            console.log('clean')
        }
    }, [])
    return (
        <header>
            <img src={logo} alt="logo"/>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
}

export default Header;