import React from 'react';
import styles from './Content.css';
import scripts from '../script';

export default function Content() {
    return (
        <div >
            <h1>Content</h1>
            <button onClick={scripts.etwas()}>Button</button>
        </div>
    );
}