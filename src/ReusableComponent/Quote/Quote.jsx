import React, { useEffect, useState } from 'react'

// Updated quotes array to include both quote and author
const quotes = [
    { text: "Have them pick out a new fruit or vegetable in the grocery store each week. Plan together how to prepare it in a healthy way.", author: "Make it fun for kids to try new fruits and vegetables."},
    { text: "Use nontropical liquid vegetable oils, such as canola, corn, olive, safflower, sesame and sunflower, in place of butter and other solid fats to minimize saturated fat and avoid trans fat.", author: "Choose healthy “good” fats. " },
    { text: "It’s hard to expect your kids to eat their vegetables if you’re not eating yours. Teach your kids and show by example what healthy foods are and how much we should be eating to keep our bodies healthy..", author: "Be a good role model." },
    { text: "They are loaded with nutrients and dietary fiber. They are also naturally low in calories and sodium. Fresh, frozen and canned produce can all be healthy choices. For canned, choose the no-salt-added, reduced-sodium and no-added-sugar options. For frozen, look for those with no sauces or seasonings.", author: "Choose fresh, canned or frozen vegetables and fruits." },
    { text: "Keep your recipes, grocery list and coupons organized to make planning and budgeting easier. The more you plan, the less likely you’ll be tempted to choose fast food or make other unhealthy choices.", author: "Schedule time each week to plan healthy meals." },
    { text: "Sit down for a meal together at least once a week with family, friends or neighbors. It can reduce stress, boost self-esteem and make everyone feel more connected..", author: "Eat together as a family." },
    { text: "The words impossible is not in my dictionary. I will give it a try first", author: "Chef Code Arnold"},
    { text: 'I am so clever that sometimes I don’t understand a single word of what I am saying🤣', author: 'Hassan Ascenxio'},
  ];
function Quote() {
    const [quote, setQuote] = useState(quotes[0]);

 

  useEffect(()=>{
    // var setspeech = setInterval(() => {
    //     const generateQuote = () => {
    //         const randomIndex = Math.floor(Math.random() * quotes.length);
    //         setQuote(quotes[randomIndex]);
    //       };
    // }, 1000);

    const setspeech = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      }, 4000); // Changes quote every second
  
    return ()=> clearInterval(setspeech)
  },[])

  return (
    <div>
      
      <div className=" w-full flex justify-center items-center relative">
        <div className="bg-yellow h-[300px] w-[80%] bg-[#5F8670] rotate-[-4deg] rounded-[30px] absolute -z-10"></div>
        <div className=" min-h-[300px] w-[80%] bg-[#E7F0DC] rounded-[30px] flex flex-col justify-center items-center  p-[20px] ">
          <h1 className=' text-[15px] font-medium mb-6 lg:text-[20px] text-[#5F8670] ' >{quote.author}</h1>
          <p className=' text-[20px] font-semibold'>{quote.text}</p>
        </div>
        
      </div>
  


    </div>
  )
}

export default Quote