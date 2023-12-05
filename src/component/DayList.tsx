import dummy from "../db/data.json";
import styles from "./Body.module.css";
import {Link} from "react-router-dom";
import { useState , useEffect } from "react";
import {useFetch, useCustomHook }  from "../hooks/useFetch.ts";

import Day from "./Day";
import CreateWord from "./CreateWord";
import { Outlet } from 'react-router-dom';
import React from "react";

export interface IDay {
    id:number;
    day:number;
}

function DayList(){
    console.log('dummy' , dummy)

    // const [days , setDays] = useState([])
    // const [count , setCount] = useState(0)

    const days:IDay[] = useFetch(`http://localhost:3001/days`)

    //빈배열 : 한번만 , 특정변수배열, 그변수변경시만, null : 전체
    //useffect((),[])
    // useEffect(() =>{
    //     console.log("useEffect")

    //     fetch('http://localhost:3001/days')
    //         .then( res => {
    //             return res.json()
    //         })
    //         .then( data => {
    //             setDays(data)
    //         })
    // }, [])

    // function onclick(){
    //     setCount(count + 1)
    // }

    // function onclick2(){
    //     setDays([...days,{
    //         id:Math.random(),
    //         day:1
    //     }])
    // }

    if(days.length === 0 ){
        return <div>Loading...</div>
    }

    return (
    <>
        <ul className={styles.list_day}>
        {days.map(day => (
            <li key={day.id}>                
                <Link to={`/day/${day.day}`}> Day {day.day}</Link>
            </li>
        ))}
        {/* <button onClick={onclick}>{count}</button> */}
        {/* <button onClick={onclick2}>Day Add</button> */}
        
        </ul> 
        {/* <Day />
        <CreateWord /> */}
        {/* <Outlet /> */}
    </>
    )
}

export default DayList