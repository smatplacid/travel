import React from 'react';
import './Content.css';
import scripts from '../script';


export default function Content() {
    return (
        <div >
            
            <img src="../../../../.SourceFiles/German.jpg" alt="germanFlag" />
            <img src="../../../../.SourceFiles/sweden.jpg" alt="swedenFlag" /> <br />
            <input className='inputArea' type='text' placeholder='Translate text'></input> <br></br>
            <button className="button-88" onClick={scripts.etwas()}>Speak</button>
            <button className="button-88" onClick={scripts.etwas()}>Translate</button>
            
// comment

        </div>
    );
}