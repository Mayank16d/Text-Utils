import React,{useState} from 'react'

export default function ContactForm(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function Submitnow(){
    setEmail("");
    setMessage("");
    props.showAlert('message submited successfully','success')
  }
  function reset(){
    setEmail("");
    setMessage("");
  }
  function handelOnChange(event){
    setEmail(event.target.value);
}
function handelChange(event){
  setMessage(event.target.value);
}
  return (
    <>
    <form>
        <h2 className='text-center'>Contact Form</h2>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="email"  value={email} onChange={handelOnChange} style={{backgroundColor: props.Mode==='dark'?'black':'white',color: props.Mode==='light'?'black':'white'}} placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="message" value={message} onChange={handelChange} style={{backgroundColor: props.Mode==='dark'?'black':'white',color: props.Mode==='light'?'black':'white'}} rows="5"placeholder='Enter your Message Here'></textarea>
  </div>
</form>
<button className="btn btn-primary mx-1 my-1" onClick={Submitnow}>Submit</button>
<button className="btn btn-primary mx-1 my-1" type='reset' onClick={reset}>Reset</button>

</>
  )
}
