
import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMini(props) {
  return (
    <div className=' '>

       <div onClick={props.dropdown} className=" lg:hidden">
          <div className=' w-full bg-[] grid absolute left-0 h-[300px] z-10' style={{opacity:props.setOpacity, top:props.setView, transition:'1s'}}>

     <Link className=" subnav text-[20px] font-bold  flex items-center pl-3"  to='/'>Home</Link>
           <Link className=" subnav font-bold  flex items-center pl-3 " to='/restaurant'>Restaurants</Link>
           <Link className=" subnav font-bold  flex items-center pl-3" to='/faqs'>FAQs</Link>
         <Link className=" subnav font-bold  flex items-center pl-3" to='/catering'>Catering Services</Link>
           <Link  className=" subnav font-bold  flex items-center pl-3" to='/gift'>Surprise Package</Link>
           {/* <Link className=" subnav font-bold  flex items-center pl-3"to=''>Login</Link> */}

     </div>
        </div>
    </div>
  )
}

export default HeaderMini





// import React from 'react'
// import { Link } from 'react-router-dom'

// function HeaderMini(props) {
//   return (
//    <div className=" lg:hidden">
//      <div className=' w-full bg-[] grid absolute left-0 top-[80px] z-10' style={{opacity:props.setOpacity, height:props.setView, transition:'1s'}}>

// <Link className=" subnav text-[20px] font-bold  flex items-center pl-3"  to='/'>Home</Link>
//       <Link className=" subnav font-bold  flex items-center pl-3 " to='/about'>About</Link>
//       <Link className=" subnav font-bold  flex items-center pl-3" to='/product'>Product</Link>
//     <Link className=" subnav font-bold  flex items-center pl-3" to='/service'>Service</Link>
//       <Link  className=" subnav font-bold  flex items-center pl-3" to='/contact'>Contact</Link>
//       <Link className=" subnav font-bold  flex items-center pl-3"to=''>Login</Link>

// </div>
//    </div>
//   )
// }

// export default HeaderMini
