import React from 'react'

function Alert(props) {
    const captalize=(word)=>{
        // const word=wd.toLowerCase();
        return word.charAt(0).toUpperCase()+ word.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{captalize(props.alert.type) }: </strong>{props.alert.msg}
  
</div>}
    </div>
    
    
/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
  {props.alert}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> */

  )
}

export default Alert