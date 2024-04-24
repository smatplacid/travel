import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countries from "../data";
import './Translate.css';


const Translate = () => {

    const [fromLanguage, setFromLanguage] = useState(null);
    const [toLanguage, setToLanguage] = useState(null);

    // Funktion, um die Auswahl zu verarbeiten
    const handleLanguageChange = (selectedOption, action) => {
        if (action.name === "from-language") {
            setFromLanguage(selectedOption.value);
        } else if (action.name === "to-language") {
            setToLanguage(selectedOption.value);
        }
    };

    // Funktion zum Senden der Übersetzung an die API
    const translateText = () => {
        const fromText = document.querySelector(".from-text").value.trim();
        if (!fromText || !fromLanguage || !toLanguage) return;

        const apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                document.querySelector(".to-text").value = data.responseData.translatedText;
            });
    };

    const options = Object.entries(countries).map(([key, { name, image }]) => ({
        value: key,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image} alt={name} style={{ width: 20, marginRight: 10 }} />
                {name}
            </div>
        )
    }));

    /*

    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
        const exchangeIcon = document.querySelector(".exchange");
        const icons = document.querySelectorAll(".row i ");
        const translateBtn = document.querySelector("button");
        const optionsTag = document.querySelectorAll("select");

        optionsTag.forEach((tag, id) => {
            for (let country_code in countries) {
                let selected =
                    id == 0
                        ? country_code == "de-DE"
                            ? "selected"
                            : ""
                        : country_code == "en-GB"
                            ? "selected"
                            : "";

                let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;

                // Insert option before select tag
                tag.insertAdjacentHTML("beforeend", option);
            }
        });

        exchangeIcon.addEventListener("click", () => {
            let tempText = fromText.value;
            let tempLang = optionsTag[0].value;
            fromText.value = toText.value;
            toText.value = tempText;
            optionsTag[0].value = optionsTag[1].value;
            optionsTag[1].value = tempLang;
        });

        fromText.addEventListener("keyup", () => {
            if (!fromText.value) {
                toText.value = "";
            }
        });

        translateBtn.addEventListener("click", () => {
            let text = fromText.value.trim();
            let translateFrom = optionsTag[0].value;
            let translateTo = optionsTag[1].value;

            if (!text) {
                return;
            }
            toText.setAttribute("placeholder", "Translating...");

            let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    toText.value = data.responseData.translatedText;
                });
            toText.setAttribute("placeholder", "Translation");
        });

        icons.forEach((icon) => {
            icon.addEventListener("click", ({ target }) => {
                if (!fromText.value || !toText.value) {
                    return;
                }
                if (target.classList.contains("fa-copy")) {
                    if (target.id == "from") {
                        navigator.clipboard.writeText(fromText.value);
                    } else {
                        navigator.clipboard.writeText(toText.value);
                    }
                } else {
                    let sound;
                    if (target.id == "from") {
                        sound = new SpeechSynthesisUtterance(fromText.value);
                    } else {
                        sound = new SpeechSynthesisUtterance(toText.value);
                    }
                    speechSynthesis.speak(sound);
                }
            });
        });
    }, []);

    // Erstelle eine Optionen-Liste für react-select
    const options = Object.entries(countries).map(([key, { name, image }]) => ({
        value: key,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image} alt={name} style={{ width: 20, marginRight: 10 }} />
                {name}
            </div>
        )
    }));

    */

    return (
        <>
            <div className="translateContainer">
                <div className="wrapper">
                    <div className="text-input">
                        <textarea
                            spellCheck="false"
                            className="from-text"
                            placeholder="Enter text"
                        ></textarea>
                        <textarea
                            spellCheck="false"
                            readOnly
                            disabled
                            className="to-text"
                            placeholder="Translation"
                        ></textarea>
                    </div>
                    <ul className="controls">
                        <li className="row from">
                            <div className="icons">
                                <i id="from" className="fas fa-volume-up"></i>
                                <i id="from" className="fas fa-copy"></i>
                            </div>

                            <Select
                                options={options}
                                placeholder="Select a source language"
                                className="select"
                                isSearchable={true}
                                onChange={(option) => handleLanguageChange(option, { name: "from-language" })}
                            />

                            {/* <select></select> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: option }} /> */}
                        </li>
                        <li className="exchange">
                            <i className="fas fa-exchange-alt" />
                        </li>
                        <li className="row to">

                            <Select
                                options={options}
                                placeholder="Select a source language"
                                className="select"
                                isSearchable={true}
                                onChange={(option) => handleLanguageChange(option, { name: "to-language" })}
                            />

                            <div className="icons">
                                <i id="to" className="fas fa-volume-up" />
                                <i id="to" className="fas fa-copy" />
                            </div>
                        </li>
                    </ul>
                </div>
                <button>Translate Text</button>
            </div>
        </>
    );
};

export default Translate;