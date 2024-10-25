
import React from 'react';

const CustomInput = ({ type, name, value, onInput, placeholder, className, ...rest }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onInput={onInput}
            placeholder={placeholder}
            className={className}
            {...rest}
        />
    );
};

export default CustomInput;



// // CustomInput Component
// import React from 'react';

// function CustomInput(props) {
//     const {
//         height,
//         width,
//         borderRadius,
//         border,
//         color,
//         backgroundColor,
//         paddingLeft,
//         type,
//         name,
//         value,
//         id,
//         placeholder,
//         onChange,
//         ...rest
//     } = props;

//     const inputStyle = {
//         height,
//         width,
//         borderRadius,
//         border,
//         color,
//         backgroundColor,
//         paddingLeft,
//         cursor: 'pointer',
//     };

//     return (
//         <div>
//             <input
//                 style={inputStyle}
//                 type={type}
//                 name={name}
//                 value={value}
//                 id={id}
//                 placeholder={placeholder}
//                 onChange={onChange}
//                 {...rest}
//                 required
//             />
//         </div>
//     );
// }

// export default CustomInput;