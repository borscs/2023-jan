import React, {useCallback, useMemo, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
    console.log('APP RUNNING');
    const [showString, setShowString] = useState(false);
    const [enableButton, setEnableButton] = useState(false);
    const [listTitle, setListTitle] = useState('My List');

    const changeListTitle = useCallback(() => {
        setListTitle('New Title');
    }, [])


    const toggleHandler = useCallback(() => {
        if(enableButton) {
            console.log('USECALLBACK');
            setShowString((prevString) => !prevString);
        }
    }, [enableButton]);

    const enableHandler = () => {
        setEnableButton(true);
    };

    const listItems = useMemo(() => [5,3,10,9], [])

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {/*<Demo show={showString}/>*/}
            <Demo title={listTitle} items={listItems}/>
            <Button onClick={toggleHandler}>Valami</Button>
            <Button onClick={changeListTitle}>valami2</Button>
        </div>
    );
}

export default App;
