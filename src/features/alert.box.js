import React from 'react';


export const AlertBox = (message) =>{
    return(
        <div className = "alert-box-conatiner">
            <div className = 'alert-message'>{message}</div>
            
        </div>
    )
}