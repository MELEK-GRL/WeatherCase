import Tab from "../tab/Tab"
import Image from "next/image"
import logos from '../../../public/assets/logos.jpg'
import weatherIcon from '../../../public/assets/weatherIcon.webp'
export default function WeatherCard({ weather }) {
  return (
    <div className=" w-full  flex flex-col ">

      <div className="shadow-2xl w-full shadow-md rounded  p-2 gap-2">

        <div className='flex  w-full relative  text-white'>
          {typeof weather.main !== "undefined" ? (
            <div className="  w-full h-[230px] sm:h-[180px]  flex flex-col   sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  justify-center items-center">
              <div className='flex rounded-tr-xl rounded-bl-xl h-full  absolute opacity-60 px-5 items-center justify-center bg-black w-full bottom-0 flex-col gap-1'>

                <div className='flex w-full sm:flex-row flex-col-reverse items-center justify-center  gap-1'>

                  <div className="flex sm:w-[50%] w-full items-center flex-col gap-1">
                    <div className="gap-1 flex sm:w-full flex-col">
                      <div className="sm:text-[23px] text-[20px] flex items-center font-semibold gap-1">{weather.name} 
                        <span className="text-[20px] font-light"> ({weather.sys.country})</span>
                      </div>
                      <div className="flex sm:items-start sm:justify-start justify-center   gap-2 items-center">
                         <span className='sm:text-[19px] text-[15px]'>{weather.main.temp.toFixed(0)}°C</span>
                      </div>
                    </div>
                    <Tab weather={weather} />
                  </div>
                  <div className="flex sm:w-[50%] items-center w-full flex-col gap-1 sm:items-end " >
                    <Image className="sm:w-24 object-cover w-16 h-16 sm:h-24" src={weatherIcon} alt="weatherIcon" />
                    <span className="text-[10px] py-1 px-3 shadow-sm shadow-white">Humidity : {weather.main.humidity}%</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full rounded-tr-xl rounded-bl-xlw-full h-full   flex-col ">
                <Image src={logos} alt="logos" className="w-full  h-full rounded-tr-xl rounded-bl-xl object-cover" />
              </div>
            </div>
          ) : (
            <div className="w-full bg-gray-800 p-4 shadow-2xl flex justify-center items-center">
              <span className="text-[14px] text-center font-semibold">
                Search Empty</span>
            </div>
          )}
        </div>



      </div>
    </div>
  )
}
