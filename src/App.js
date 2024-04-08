import './App.css';
import {useEffect, useState} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready()
    },[])


    const [textFieldValue, setTextFieldValue] = useState('');

    const [dropdownValue, setDropdownValue] = useState('one');
    const [generatedUrl, setGeneratedUrl] = useState('');

    const handleSubmit = () => {
        // Составляем URL
        const url = `http://my_test_bot.com?text_field=${encodeURIComponent(textFieldValue)}&drop_down=${encodeURIComponent(dropdownValue)}`;

        setGeneratedUrl(url);
    };

    return (
        <div className="App">
            <h1>Мое Telegram Web App</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Текстовое поле:</label>
                    <inputпочемупочему
                        type="text"
                        value={textFieldValue}
                        onChange={(e) => setTextFieldValue(e.target.value)}
                    />
                </div>
                <div>
                    <label>Выпадающий список:</label>
                    <select
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                    >
                        <option value="one">Один</option>
                        <option value="two">Два</option>
                        <option value="three">Три</option>
                    </select>
                </div>
                <button type="submit">Сгенерировать URL</button>
            </form>
            {generatedUrl && <p>Сгенерированный URL: {generatedUrl}</p>}
        </div>
    );

}

export default App;
