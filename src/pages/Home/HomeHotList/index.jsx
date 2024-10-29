import React,{ useState,useEffect } from "react"
import api from "../../../api"
import HomeHotView from "../HomeHotView"

const HomeHotList = () =>{

    const [hot1List,setHot1List] = useState([])
    const [hot2List,setHot2List] = useState([])

    /**
     * 获取hot1
     */
    useEffect(() =>{
        api.getHomtHot1().then(res =>{
            if(res.data.status === 200){
                setHot1List(res.data.result)
            }
        })
    },[])

    /**
     * 获取hot2
     */
    useEffect(() =>{
        api.getHomtHot2().then(res =>{
            if(res.data.status === 200){
                setHot2List(res.data.result)
            }
        })
    },[])

    return(
        <div>
            {
                hot1List.length > 0 ?
                <HomeHotView data={ hot1List } title={ 'Hot Items' }/> :
                <div>Waiting for data to load</div>
            }
            {                           
                hot2List.length > 0 ?
                <HomeHotView data={ hot2List } title={ 'New Products'}/> :
                <div>Waiting for data to load</div>
            }
        </div>
    )
}

export default HomeHotList