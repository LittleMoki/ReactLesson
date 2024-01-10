import React, {useState} from 'react';
import Button from "./Button/Button.jsx";

function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: false
    })
    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }));
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                    className='control'
                    id='name' type="text"
                    value={form.name}
                    onChange={handleNameChange}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                />
                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className='control' value={form.reason}
                        onChange={event => setForm(prev => ({...prev, reason: event.target.value}))}>
                    <option value="error">Ощибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложения</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
        </section>
    );
}

export default FeedbackSection;