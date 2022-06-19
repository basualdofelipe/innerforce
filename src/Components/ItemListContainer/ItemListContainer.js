import React from "react";
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {

    return(
          <div className="waviy">
            {greeting.split('').map((e,a)=>{
                return(
                    <span style={{"--i":a}}>{e}</span>
                    )
                    })}
          </div>
    )
  }

  export default ItemListContainer