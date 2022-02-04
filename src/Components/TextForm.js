import React, {useState} from "react";

export default function TextForm(props) {
    const Uppercase = ()=>
    {
        let UppercaseText = text.toUpperCase();
        setText(UppercaseText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const Lowercase = ()=>
    {
        let LowercaseText = text.toLowerCase(); 
        setText(LowercaseText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange= (event)=>
    {
        setText(event.target.value);
    }
    const ClearText =()=>
    {
        setText('');
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
      <div className="containers" style={{color : props.mode === "light" ? "black" : "white"}}>
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "light" ? "white" : "grey"}}id="myBox" rows="9"></textarea>
        <br /> 
        <button className="btn btn-primary mx-2" onClick={Uppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={Lowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary"onClick={ClearText}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3" style={{color : props.mode === "light" ? "black" : "white"}}>
        <h3>Text Summary </h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
    </div>
    </>
  );
}