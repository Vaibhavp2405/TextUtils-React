import React , {useState} from 'react'

export default function TextForm(props) {
     
     const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted into uppercase" , "Success");
     }

      const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
         props.showAlert("Converted into lowercase" , "Success");
     }

         const handleOnChange = (event) => {
            setText(event.target.value);
        
     }
     const [text, setText] = useState("");

     const handleCopy = () =>
    {
        let text = document.getElementById("myBox");
       text.select() ;
        navigator.clipboard.writeText(text.value);
         props.showAlert("Text Copied!" , "Success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
         props.showAlert("Extra Spaces Removed" , "Success");
    }

  return (
    <>
        <div className='container'  style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h1 >
            {props.heading}
        </h1>
    <div className="mb-3">
    
    <textarea className="form-control" id="myBox" rows="6" placeholder='Enter Your Text' onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}}> </textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}b>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}b>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}b>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}b>Remove ExtraSpace</button>

    </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1> Your Text Summary</h1>
            <p>{text.trim() ? text.trim().split(/\s+/).length : 0} Words and {text.length} Characters</p>
            <p> {0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>

            )
            
}

