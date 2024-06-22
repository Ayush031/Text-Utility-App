import React, { useState } from 'react'

export default function TextForm(pass) {

    const [text, setText] = useState('');

    // onChange is mandatory to type in TextArea else throw Js error
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        pass.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        pass.showAlert("Converted to Lower Case", "success");
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        pass.showAlert("TextArea Cleared", "success");
    }

    const handleCopyText = () => {
        let newText = document.getElementById("myBox");
        if (newText.value.length > 0) {
            newText.select();
            navigator.clipboard.writeText(newText.value);
            pass.showAlert("Text Copied", "success");
        }
        else {
            pass.showAlert("Enter Text to Copy", "warning");
        }
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        pass.showAlert("Exra Spaces are Removed", "success");
    }

    const validModes = ['dark', 'green', 'pink'];

    return (
        <>
            <div className="container">
                <h1> {pass.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: validModes.includes(pass.mode) ? '#212529' : 'white', color: validModes.includes(pass.mode) ? 'white' : 'black' }} value={text} onChange={handleOnChange} placeholder='Enter Text Here' id="myBox" rows="6"></textarea>
                    <button className="btn btn-primary my-3 mx-1" style={{ border: '2px solid black', backgroundColor: pass.btnColor, color: pass.btnTxtColor }} onClick={handleUpClick} >Convert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-1" style={{ border: '2px solid black', backgroundColor: pass.btnColor, color: pass.btnTxtColor }} onClick={handleLowClick} >Convert to LowerCase</button>
                    <button className="btn btn-primary my-3 mx-1" style={{ border: '2px solid black', backgroundColor: pass.btnColor, color: pass.btnTxtColor }} onClick={handleClearText} >Clear Text</button>
                    <button className="btn btn-primary my-3 mx-1" style={{ border: '2px solid black', backgroundColor: pass.btnColor, color: pass.btnTxtColor }} onClick={handleCopyText} >Copy Text</button>
                    <button className="btn btn-primary my-3 mx-1" style={{ border: '2px solid black', backgroundColor: pass.btnColor, color: pass.btnTxtColor }} onClick={handleExtraSpace} >Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview here"}</p>
            </div>
        </>
    )
}