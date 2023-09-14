import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    function HandelUpclick(){
    // let newt=text.toUpperCase
        setText(text.toUpperCase())
        props.showAlert('Converted to UpperCase','success');
        
    }
    function handelOnChange(event){
        setText(event.target.value);
        
    }
    function HandelLoclick(){
      setText(text.toLowerCase());
      props.showAlert('Converted to LowerCase','success');

    }
    function changeTC(){
      setText(text.replaceAll('a','b'));
    }
    function copyClip(){
      let t=document.getElementById('myBox');
      t.select();
      navigator.clipboard.writeText(t.value);
      document.getSelection().removeAllRanges();
      props.showAlert('Copied to ClipBoard','success');

    }
    // function Darkmd(){
    //   const clr=document.querySelector('body');
    //   const db=document.getElementById('dbtn');
    //   if(clr.style.backgroundColor =='white'){
    //     clr.style.backgroundColor='black';
    //     clr.style.color='white';
    //     db.textContent='Disable Dark Mode';
    //   }
    //   else{
    //     clr.style.backgroundColor='white';
    //     clr.style.color='black';
    //     db.textContent='Enable Dark Mode';
    //   }
      
      
    // }
    function startTyp(){
      setText("");
    }


  return (
    <>
    
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control my-2" value={text} onChange={handelOnChange} id="myBox" style={{backgroundColor: props.Mode==='dark'?'black':'white',color: props.Mode==='light'?'black':'white'}} onClick={startTyp} rows="5"></textarea>
  <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={HandelUpclick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={HandelLoclick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={changeTC}>replace a with b</button>
  <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={copyClip}>Copy</button>
  {/* <button className="btn btn-primary mx-1" onClick={Darkmd} id="dbtn">Enable Dark Mode</button> */}



</div>
<div className="container">
  <h2>The total number of words and characters</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Character</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read Time</p>
</div>

<h2>Preview</h2>
<p>{text}</p>

    </>
  )
}
