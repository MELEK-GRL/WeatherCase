import WeatherCard from "../card/WeatherCard"
import Search from "../search/Search"
import cityData from "../../../data/cityData.json";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Section() {


  const [search, setSearch] = useState("");

  const [pageNum, setPageNum] = useState(0);

  const[post,setPost]=useState(cityData)

  const[posts,setPosts]=useState([])
const [cityName,setCityName]=useState("Rome")
  const key='73863d50e6415a9af087e1a18e267d86'

  // const apiEndpoint=`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${key}`

  const apiEndpoint=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
  
 console.log(apiEndpoint)
useEffect(() => {
  const getPost=async ()=>{
    const {data:res}=await axios.get(apiEndpoint)
    setPosts([res])
   
  }
  getPost()

}, [])

console.log(apiEndpoint)




  const searched = posts.filter((item) => {
    if (search.value == "") return item;

    if (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
      return item;
  })
  const productPerPage = 20;
  const visitePage = productPerPage * pageNum;
  const displayPage = searched.slice(visitePage, visitePage + productPerPage);



  return (
    <div className="flex  w-full flex-col gap-4">
      <Search search={search} setSearch={setSearch} />
      <div className=" w-full gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start">
        {displayPage

          .map((item,index) => (
            <div
              key={index}
              className="border shadow-md rounded  p-2 gap-2"
            >
              <WeatherCard
                search={search}
                setSearch={setSearch}
                item={item}
              />
            </div>
          ))}
       
      </div>
    </div>
  )
}
