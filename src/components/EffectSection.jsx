import React, {useCallback, useEffect, useState} from 'react';
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import useInput from "./hooks/UseInput.js";

function EffectSection() {
    let input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async ()=>{
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    },[])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    return (
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom:'1rem'}} onClick={() => setModal(!modal)}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello Modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eligendi est iste laboriosam quas
                    soluta vitae? Amet molestiae omnis voluptate.</p>
                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <input type="text" className='control' {...input} placeholder='Search users...'/>
                    <ul>
                        {users.filter(user=>user.name.toLowerCase().includes(input.value.toLowerCase())).map((el) => (
                            <li key={el.id}>{el.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}

export default EffectSection;