import React, {useState} from 'react'


export default function TextForm(props) {
const[text, setText] = useState(''); // 'Enter text here' ye default value hai
// text ek variable hai , setText ek method hai jo us variable ko update karta hai 

// setText("Text is updated"); // corrct way to update the text 

// ab jaha jaha me text ko update karunga wo update ho jaayega bina page ko reload kiye 

// class base component me hum this ka use karke hum state change kar lete the but function
// base component me hum bina class banaye hooks ka use karke state change kar lete hai kisi
// bhi component ki 

// useState text aur setText return karega aur hum arry destructuring ki help se hum 
// text ko update kar denge accordingly 

//VVVVVIMP KEY POINT : const[text, setText] = useState('Enter Text Here') ye code line
// humesha functional component ke andar hogi, not outside the functional component 

// TextForm ek component hai aur use textfrom me koi bhi change uski current state
// ko batata hai .. example empty textForm ek state hai .. usme aapne koi text
// add kar diya to wo ek state hai and so on an so forth 

// Props se confuse mat karna state ko ... props ko aap pass karte ho jaise aapne ek component
// bana rakha hai to useme aap props ko pass karte ho aur wo cheezien render ho jaati hai 
// aapke component me ..but state ek component ko belong karti hai for example useState ek hook
// hai 

// text = "dfdfdfdff" // text aise update nahi hota hai components ke case me 
// // humein function setText("dfdfdfdff") use karna padta hai update karne ke liye
// so update hoke text ki value 'Enter text Here' se 'dfdfdfff' ho jaayegi 

// text = "Janao"; wrong way to change the state of the component;

const handleUpperCaseClick =() =>{

// console.log('Upper Case was clicked'+ text)
let newText = text.toUpperCase();
// setText('You have clicked on handleup')

setText(newText);

}

const handleLowerCaseClick =() =>{

    // console.log('Upper Case was clicked'+ text)
    let newText = text.toLowerCase();
    // setText('You have clicked on handleup')
    
    setText(newText);
    
    }

const handleClearClick =() =>{

        // console.log('Upper Case was clicked'+ text)
        // let newText = text('')
        // setText('You have clicked on handleup')
        
        setText('');
        
        }    

const handleOnChange =(event) =>{

    // console.log('Onchange was clicked')
    setText(event.target.value) // jab user text area ko change karne ki kosis kare to
    // jo value hai meri ..for example user ne 'h' likha textbox me to jo value hai us moment pe
    // value ho jaayegi jo text already tha + 'h' ... aur ab hum textbox me type bhi kar paayenge
    }
const handleCopy =() =>{


let text = document.getElementById('myBox')
text.select();
navigator.clipboard.writeText(text.value)
}

const handleExtraspaces =() =>{

let newText  = text.split(/[ ]+/);

setText(newText.join(" "))

}

  return (
      <>
      <div>
  <h1>{props.heading}</h1>
  <div className='mb-3'>
      {/* humne onchange event isliye liya kyonki text ki value{text} hum change kar rahe hai jisse
          state update ho rahi hai ..to humein onchange event handler use karna hoga tabhi hum 
          text box me hum type kar paayenge 
      */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Spaces</button>




</div>
<div className="container my-3">
<h2>Your text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes to read the Paragraph</p> 
{/* 0.008 *  number of words */}
<h2>Preview</h2>
<p>{text}</p>
</div>

</>
  )
}
