import React from 'react'

export default function BookItem(props) {
    
    const style = {
        borderBottomColor: "black",
        borderBottomWidth: 2, 
        borderBottomStyle: "solid"
        }
    
        const {thumbnail} = Object.values(props)[1];
        // console.log(thumbnail);
    // const url = Object.values(props).map(item => item.smallThumbnail);
    
    return(
        // Write if statement if no img is found
        <li style={style}>
            <img src={thumbnail} alt=""/>
            <p>{props[2]}</p>
            <p>{props[0]}</p>

        </li>
    )
} 