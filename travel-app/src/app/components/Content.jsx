import React from 'react';
import './Content.css';
import scripts from '../script';




export default function Content() {
    return (
        <div >
            <h1 className='cont-txt'>Content</h1>
            <button className="button-87" onClick={scripts.etwas()}>Translate</button> <br></br>
            <button className="button-87" onClick={scripts.etwas()}>Travel</button>
            
        </div>
    );
}