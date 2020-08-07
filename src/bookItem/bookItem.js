import React from 'react'

export default function BookItem(props) {
    
    const style = {
        borderBottomColor: "black",
        borderBottomWidth: 2, 
        borderBottomStyle: "solid"
        }
    
    
    const url = Object.values(props).map(item => item.smallThumbnail);
    
    return(
        
        <li style={style}>
            <img src={url[1]} alt=""/>
            <p>{props[2]}</p>
            <p>{props[0]}</p>

        </li>
    )
} 