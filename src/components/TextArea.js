import React, { useState } from 'react';

// function handleOnChange(e, setText) {
//     setText(e.target.value)
// }
// function toUpperCaseFxn(text, setText) {
//     let newText = text.toUpperCase();
//     setText(newText)
// }

// //   Line 17: 113: 'handleOnChange' is not defined  no - undef
// //   Line 18: 77: 'toUpperCaseFxn' is not defined  no - undef


export default function TextArea(props) {
    let [text, setText] = useState("");
    // let [textPreview, setTextPreview] = useState("Enter text to preview");
    function handleOnChange(e) {
        setText(e.target.value)
        // toPreview();
    }
    function toUpperCaseFxn() {
        let newText = text.toUpperCase();
        setText(newText)
    }
    function toLowerCaseFxn() {
        let newText = text.toLowerCase();
        setText(newText)
    }
    function toCapitaliseEachWordFxn() {
        let arr = text.split(" ")
        let newText = "";
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
            newText = newText + " " + word;
        }
        setText(newText)
    }
    function toCopyFxn() {
        document.getElementsByTagName('textarea')[0].select();
        // document.querySelector('textarea').select();
        navigator.clipboard.writeText(text);
    }
    function toRemoveExtraSpacesFxn() {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    function toClearTextFxn() {
        let newText = "";               // value cannot be equal to null for textarea
        setText(newText)
    }

    let toWordCharacterCounter = () => {
        let len = text.length;
        let noOfWord = text.split(" ").length;
        // console.log(text.length)
        // console.log(text.split(" "))
        let noOfCharacter = len;
        if (len > 0 && text[len - 1] === " ") {
            noOfCharacter = len - 1;
            noOfWord = noOfWord - 1;
        }
        if (len === 0 && noOfWord === 1) {
            noOfWord = 0;
        }
        let elemet = document.getElementById('read');
        if (elemet) {
            elemet.innerHTML = `${Math.ceil(0.08 * noOfWord)} min read`
        }

        return `${noOfWord} words ${noOfCharacter} characters`;
    }

    let toPreview = () => {
        let preview = "";
        let arr = text.split(" ");
        for (let i = 0; i < Math.min(arr.length, 20); i++) {
            preview = preview + " " + arr[i]
        }
        if (arr.length > 20) {
            preview += "..."
        }
        // setTextPreview(preview);
        return `${preview}`

    }
    return (
        <div className='container-fluid' style={{ ...props.modeChoice, height: "85vh" }} >
            <div className="container-sm py-5" id='textAreaWidth'>

                <div>
                    <h2>Enter your text here </h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} style={props.modeChoice} ></textarea >
                </div>
                <div>
                    <button type="button" className="btn btn-primary m-2" onClick={toUpperCaseFxn} disabled={text.length === 0}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary m-2" onClick={toLowerCaseFxn} disabled={text.length === 0}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-primary m-2" onClick={toCapitaliseEachWordFxn} disabled={text.length === 0}>Capitalise each word</button>
                    <button type="button" className="btn btn-primary m-2" onClick={toCopyFxn} disabled={text.length === 0}>Copy Text</button>
                    <button type="button" className="btn btn-primary m-2" onClick={toRemoveExtraSpacesFxn} disabled={text.length === 0}>Remove Extra Spaces</button>
                    <button type="button" className="btn btn-primary m-2" onClick={toClearTextFxn} disabled={text.length === 0}>Clear Text</button>
                </div>
                <div>
                    <p className='my-0'>{toWordCharacterCounter()}</p>
                    <p className='my-0 ' id='read'>0 min Read</p>
                    <h5 className='mt-2 mb-0 '>Preview</h5>
                    {/* <p className='my-0' id='toPreview' >{textPreview}</p> */}
                    <p className='my-0' id='toPreview' >{text.length === 0 ? "Enter your text to preview" : toPreview()}</p>

                </div >

            </div >
        </div>
    )
}
