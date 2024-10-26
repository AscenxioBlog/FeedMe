import React, { useReducer, useState } from 'react'
import { CgAdd } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";

function FaqsComponent2() {

    var [Tall1,setTall1] = useState('70px')
    var [Tall2,setTall2] = useState('70px')
    var [Tall3,setTall3] = useState('70px')
    var [Tall4,setTall4] = useState('70px')
    var [Tall5,setTall5] = useState('70px')
    var [Tall6,setTall6] = useState('70px')




    var [rotat,setRotate] = useState(0)
    var [rotat2,setRotate2] = useState(0)
    var [rotat3,setRotate3] = useState(0)
    var [rotat4,setRotate4] = useState(0)
    var [rotat5,setRotate5] = useState(0)
    var [rotat6,setRotate6] = useState(0)

   
  return (
    <div className=' h-[100vh] w-full bg-[#E7F0DC] flex justify-center'>
        <div className=" h-[100vh] w-[90%] bg-[]">

        <div className=" accord w-full bg-[] overflow-hidden" style={{minHeight:Tall1, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall1 == '70px') {
                    setTall1('200px')
                    setTall2('70px')
                    setTall3('70px')
                    setTall4('70px')
                    setTall5('70px')
                    setTall6('70px')



                    setRotate2('0deg')
                    setRotate('140deg')
                    setRotate3('0deg')
                    setRotate4('0deg')
                    setRotate5('0deg')
                    setRotate6('0deg')

                   } else {
                    setTall1('70px')
                    setRotate('0deg')

                    
                   }
                }
            }>What is FeedMe?  <span style={{ transform: `rotate(${rotat})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>FeedMe is an on-demand convenience app that lets you order from a curation of the best food delivery brands & shops. Now you can order jollof rice, a burger, pounded yam & a bottle of wine all in a single order!</p>
        </div>


        <div className="accord w-full bg-[] overflow-hidden" style={{minHeight:Tall2, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall2 == '70px') {
                    setTall2('220px')
                    setTall1('70px')
                    setTall3('70px')
                    setTall4('70px')
                    setTall6('70px')


                    setRotate('0deg')
                    setRotate2('140deg')
                    setRotate3('0deg')
                    setRotate4('0deg')
                    setRotate6('0deg')


                   } else {
                    setTall2('70px')
                    setRotate2('0deg')

                    
                   }
                }
            }>How do I order?  <span style={{ transform: `rotate(${rotat2})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>Once you download FeedMe, you can place an order by simply tapping on the restaurant of your choice, selecting an item and clicking “Add to Basket” for Food. For Shop, simply visit the shop section on your bottom nav bar, then click on the blue + button to add items to your cart. Click “View Basket” to complete your order.</p>
        </div>





        <div className="accord w-full bg-[] overflow-hidden" style={{minHeight:Tall3, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall3 == '70px') {
                    setTall3('200px')
                    setTall1('70px')
                    setTall2('70px')
                    setTall4('70px')
                    setTall5('70px')
                    setTall6('70px')



                    setRotate3('140deg')
                    setRotate('0deg')
                    setRotate2('0deg')
                    setRotate4('0deg')
                    setRotate5('0deg')
                    setRotate6('0deg')

                   } else {
                    setTall3('70px')
                    setRotate3('0deg')
                    
                   }
                }
            }>How can I report or resolve issues & disputes?  <span style={{ transform: `rotate(${rotat3})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>You can email us at HelloFeedMe.com or visit the help/ feedback page on the app to see the available call & whatsapp lines</p>
        </div>



        
        <div className="accord w-full bg-[] overflow-hidden" style={{minHeight:Tall4, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall4 == '70px') {
                    setTall4('220px')
                    setTall1('70px')
                    setTall2('70px')
                    setTall3('70px')
                    setTall5('70px')
                    setTall6('70px')




                    setRotate4('140deg')
                    setRotate('0deg')
                    setRotate2('0deg')
                    setRotate3('0deg')
                    setRotate5('0deg')
                    setRotate6('0deg')


                   } else {
                    setTall4('70px')
                    setRotate4('0deg')
                    
                   }
                }
            }>Can I order from different restaurants?  <span style={{ transform: `rotate(${rotat4})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>Once you download FeedMe, you can place an order by simply tapping on the restaurant of your choice, selecting an item and clicking “Add to Basket” for Food. For Shop, simply visit the shop section on your bottom nav bar, then click on the blue + button to add items to your cart. Click “View Basket” to complete your order.</p>
        </div>


        <div className="accord w-full bg-[] overflow-hidden" style={{minHeight:Tall5, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall5 == '70px') {
                    setTall5('220px')
                    setTall1('70px')
                    setTall2('70px')
                    setTall3('70px')
                    setTall4('70px')
                    setTall6('70px')




                    setRotate5('140deg')
                    setRotate('0deg')
                    setRotate2('0deg')
                    setRotate3('0deg')
                    setRotate4('0deg')
                    setRotate6('0deg')



                   } else {
                    setTall5('70px')
                    setRotate5('0deg')
                    
                   }
                }
            }>What is the delivery fee?  <span style={{ transform: `rotate(${rotat5})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'> The delivery fee is determined by the distance between you & the restaurant. Our delivery fees currently go from 390 – 850 naira & may increase as much as 1.5x during a surge. Surges are caused by irregular factors like heavy traffic, heavy rainfall, fuel scarcity, high order volumes at the restaurant, etc.</p>
        </div>


        <div className="accord w-full bg-[] overflow-hidden" style={{minHeight:Tall6, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall6 == '70px') {
                    setTall6('200px')
                    setTall1('70px')
                    setTall2('70px')
                    setTall3('70px')
                    setTall4('70px')
                    setTall5('70px')




                    setRotate6('140deg')
                    setRotate('0deg')
                    setRotate2('0deg')
                    setRotate3('0deg')
                    setRotate4('0deg')
                    setRotate5('0deg')



                   } else {
                    setTall6('70px')
                    setRotate6('0deg')
                    
                   }
                }
            }>What are the available payment options?  <span style={{ transform: `rotate(${rotat6})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'> We are 100% cashless! You can pay for your order via paystack (card) or bank transfer. Please note that for bank transfers, your payment must be confirmed before your order is prepared.</p>
        </div>
        </div>
       
    </div>
  )
}

export default FaqsComponent2
