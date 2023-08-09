import React, { useState } from 'react'

function Home(props) {

    const [isClicked,setState]=useState(true);
    const [count, setCount] = useState(0);
  
  return (
    <div>
        <div className='box'>
          <card className="card">
           <div className="col mb-4"><div className='card mb-5 mb-lg-0'>
          <div>
           <img  src="https://dummyimage.com/640x360/fff/aaa"
           alt="image" style={{width:200, height:150}} /> <br></br>
          <h2>{props.name}</h2>
           <p><h4>{props.price}</h4></p>
           <div id='btn'>
           <button onClick={() => setCount((count=0) => count + 1)}>
          Add {count}
        </button>
        <button onClick={() => setCount((count=0) => count - 1)}>
         Remove
        </button>
        </div>
            </div>
            

        <div></div>
        </div></div></card>
        </div></div>    
        
        
    
    
    
   
    
  )
}

export default Home