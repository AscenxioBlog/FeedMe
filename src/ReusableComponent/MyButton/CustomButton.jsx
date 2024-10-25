import React from 'react'

function CustomButton(props) {

    const btnStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        label: props.label,
        color: props.color || 'black',
        border: props.border || 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: props.marginTop

    }
  return (
    <div>
        <button style={btnStyle} onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default CustomButton