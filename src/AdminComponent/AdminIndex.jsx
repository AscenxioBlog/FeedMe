import React from 'react'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,  // Import the "category" scale
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  // Register the required scales and other components
  ChartJS.register(
    CategoryScale,  // This is the missing "category" scale
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  


function AdminIndex() {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Number of Orders',
            data: [12, 19, 3, 5, 2, 3, 7],  // These are just some example numbers for now
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
          }
        ]
    };

    const data2 = {
        labels: ['Burgers', 'Pizzas', 'Sushi', 'Salads', 'Drinks'],  // Example categories
        datasets: [
          {
            label: 'Orders per Category',
            data: [50, 75, 100, 30, 55],  // Example data for each category
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      // Options to customize the chart
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Orders by Category',
          },
        },
      };
  return (
    <div className='min-h-[700px] w-full bg-[]'>
        <div className=" min-h-[400px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
            <div className=" lg:h-[200px] bg-[peru] rounded-[20px] p-3 box-border text-white space-y-5">
                <h1 className=' font-bold'>TOTAL RESTAURANT</h1>
                <h1 className=' text-[40px] font-bold'>500</h1>
                <p className=' text-[18px]'>Since Last Month</p>
            </div>
            <div className="lg:h-[200px] bg-[cadetblue] rounded-[20px] p-3 box-border text-white space-y-5">
            <h1 className=' font-bold'>NEW REGISTER</h1>
                <h1 className=' text-[40px] font-bold'>500</h1>
                <p className=' text-[18px]'>Since Last Month</p>
            </div>


            <div className="lg:h-[200px] bg-[lime] rounded-[20px] p-3 box-border text-white space-y-5">
            <h1 className=' font-bold'>TOTAL FOOD ORDER</h1>
                <h1 className=' text-[40px] font-bold'>500</h1>
                <p className=' text-[18px]'>Since Last Month</p>
            </div>


            <div className="lg:h-[200px] bg-[orange] rounded-[20px] p-3 box-border text-white space-y-5">
            <h1 className=' font-bold'>TOTAL USER</h1>
                <h1 className=' text-[40px] font-bold'>500</h1>
                <p className=' text-[18px]'>Since Last Month</p>
            </div>
        </div>
        <div className="">
        <h2>Orders Per Day</h2>
        <Line data={data} />
        
        </div>
        <div>
      <h2>Orders by Category</h2>
      <Bar data={data2} options={options} />
    </div>
      
    </div>
  )
}

export default AdminIndex
