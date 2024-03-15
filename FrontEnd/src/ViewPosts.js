import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ViewPosts(){
    const [apiData , setApiData] = useState([])
    const [loading , isLoading] = useState(true)
    const [apiError , setApiError] = useState(false)
    const navigate = useNavigate()
    useEffect( ()=>{
        if (localStorage.getItem("jwtToken")) {
            (async ()=>{
                try{
                   const response = await axios.get("http://localhost:3001/posts",{
                    headers:{
                        authorization:"Bearer "+localStorage.getItem("jwtToken")
                    }
                   })
                //    console.log(response.data)
                setApiData(response.data)
                isLoading(false)
                } catch (error) {
                    // isLoading(false)
                    setApiError(true)
                }
                })()
        } else {
            navigate('/login')
        }
        
    },[])

    const displayData = apiData.map((data)=><h4 key={data.id}>{data.title}</h4>)
    if(apiError){
        return <h1>Something Went Wrong....</h1>
    }
    if(loading){
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h1>Posts : </h1>
            {displayData}
        </div>
    )
}