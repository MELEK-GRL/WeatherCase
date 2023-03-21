import React, { useState } from 'react';
import { FaTemperatureHigh } from 'react-icons/fa'
import { FaTemperatureLow } from 'react-icons/fa'


export default function Tab({ weather }) {

    const [toggle, setToggle] = useState(1)

    const tabHandle = (index) => {
        setToggle(index)
    }
    return (
        <div className='flex w-full flex-col sm:items-start items-center  gap-2'>

            <div className='flex w-full gap-2 items-center justify-center sm:justify-start'>
                
                <button onClick={() => tabHandle(1)} className={toggle === 1 ? "degreeTwo" : "degreeOne"}>
                    <FaTemperatureHigh size={15} className='text-white' />
                </button>
                <button onClick={() => tabHandle(2)} className={toggle === 2 ? "degreeTwo" : "degreeOne"}>
                    <FaTemperatureLow size={15} className='text-white' />
                </button>
            </div>
            <div className='flex sm:w-[10%] w-[25%]   gap-2 flex-col'>
                <div className={`flex border-b shadow-xl items-center rounded justify-center  ${toggle === 1 ? "visible" : " hidden"}`}>
                <span className='text-[12px] font-semibold'>{weather.main.temp_min.toFixed(0)} °C</span>
                </div>
                <div className={`flex border-b shadow-xl  rounded-full  w-full items-center justify-center ${toggle === 2 ? "visible" : " hidden "}`}>
                <span className='text-[12px] font-semibold'>{weather.main.temp_max.toFixed(0)} °C</span>
                </div>
            </div>


        </div>
    )
}
