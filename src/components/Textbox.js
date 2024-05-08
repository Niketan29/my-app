import React, {useState}from 'react'

export default function Textbox(props) {

    const handleUpclick =()=>{
        console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!","success");
    }

    const handleloclick =()=>{
        console.log("Lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!","success");

    }

    const handonchange=(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const handletospek=(event)=>{

        const content = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(content);
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges(); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container1" style={{color: props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handonchange} style={{backgroundColor: props.mode ==='light'?'white':'#141111', color: props.mode ==='light'?'black':'white'}} id="textbox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handletospek}>Convert to voice</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container2 my-3" style={{color: props.mode ==='light'?'black':'white'}}>
            <h3>Your Text Summery</h3>
            <span class="border border-dark px-2">{text.split(" ").filter((element)=>{return element.length!==0}).length} words  and  {text.length} characters</span>
            <p className='my-3 px-2'>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Min  Read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
