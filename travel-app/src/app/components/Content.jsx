import React from 'react';
import './Content.css';
import scripts from '../script';




export default function Content() {
    return (
        <div className='contentContainer'>
            {/* <h1 className='cont-txt'>Content</h1> */}
            <a href="/translate"><button className="button-87" onClick={scripts.etwas()}>Translate</button></a>
            <button className="button-87" onClick={scripts.etwas()}>Travel</button>

        </div>
    );
}