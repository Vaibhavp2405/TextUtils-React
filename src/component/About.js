import React, {useState} from 'react'

            export default function About(props) {
               

                // const [myStyle , setMyStyle] = useState({
                //     color : 'black',
                //     backgroundColor : 'white'
                // })
                
                // const [btntext , setBtnText] = useState ("Enable Dark mode")
                // const toggleStyle = () => {
                //     if(myStyle.color === 'black'){
                //         setMyStyle({
                //             color : 'white',
                //             backgroundColor : 'black',
                //             border : '1px solid white'
                //         })
                //         setBtnText("Enable Light Mode");
                //     }
                //     else{
                //          setMyStyle({
                //             color : 'black',
                //     backgroundColor : 'white'
                //         })
                //         setBtnText("Enable Dark Mode");
                //     }
                // }
               let myStyle =  {
                color : props.mode === 'dark'? 'white' : '#032b5c' ,
                backgroundColor : props.mode === 'dark'? '#032b5c' : 'white' 
               }
            return (
                <div className='container' style={{color : props.mode === 'dark'? 'white' : '#032b5c'}}>
                    <h>About us</h>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
                    <strong>Fast Text Analysis</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                TextUtils helps you analyze and transform text quickly and efficiently. Whether you need to count words, characters, or estimate reading time, it provides instant results. It's designed to save time and improve productivity.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>Powerful Text Utilities</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                        With TextUtils, you can easily convert text to uppercase or lowercase, remove extra spaces, and perform other useful text transformations. The app offers simple tools that make text editing faster and more convenient.                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle}>
                    <strong>User-Friendly Experience</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    TextUtils features a clean and intuitive interface that is easy to use for everyone. With support for both light and dark modes, it ensures a comfortable experience while working with your text anytime, anywhere.                </div>
                </div>
            </div>
            </div>
            {/* <div classNameName="container my-3 "  >
                <button onClick={toggleStyle}type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
                </div>
            )
            }
