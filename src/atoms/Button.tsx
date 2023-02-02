import React from 'react'
interface ButtonProps{
title:string
backgroundColor:string,
fsize:string,
borderRadius:string,
width?:string,
heigth?:string,
color:string,
img?:string


}
const Button = (props:ButtonProps) => {
    const btnStyles = {
        width:props.width || 120,
        backgroundColor:props.backgroundColor,
        borderRadius:props.borderRadius,
        fontSize:props.fsize,
        height:props.heigth || 36,
        border:'none',
        color:props.color,
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'5px'
    }
  return (
    <button type='button' style={btnStyles} >
      {props.img && <img src={props.img} alt="" /> }
     {props.title}
    </button>
  )
}

export default Button