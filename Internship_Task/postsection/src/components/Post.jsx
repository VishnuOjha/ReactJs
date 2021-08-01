import React, { useState } from 'react'
import '../components/Post.css'




const Post= ()=>{
    const [text,setText] = useState("");
  const [item,setItems] = useState([]);

  const date = new Date().toLocaleTimeString();


  const inputchange = (event) =>{
    setText(event.target.value )
  }

  const addPost = () =>{
      if(!text){

      }
      else{
         setItems([...item, text]);
         setText('')
      }
  }

  const deleteItems = (id) =>{

    const updatedItems = item.filter((curElem,ind)=>{
      return ind != id ;
    });

    setItems(updatedItems);
  }












  

  return(<>
    <div className="container">
      <div className="box_1">
         <div className="postbox">
           <input className="text-box" type="text" placeholder="Please enter any text" value={text} onChange={inputchange} /> 
         </div>
       <div className="media">
           <ul>
            <li className="giphy"><i class="far fa-image"></i></li>
            <li className="giphy"><i class="fas fa-icons"></i></li>
         </ul>
       </div>
             <button className="primary_btn "onClick={addPost}>Post</button>
    
      </div>

      {
        item.map((elem,ind)=>{
            return(
              <div className="showText" key={ind}>
               <div className="text_view">
                 <h3>{elem} </h3>
                 <span><i class="far fa-trash-alt add-btn " title="Delete Items" onClick={()=>{deleteItems(ind)}}></i></span>
              </div>
              <div className="text_time">
                    {date}
              </div>
            </div>
            )
        })
      }
     
    </div>
    </>
    )
}



export default Post;