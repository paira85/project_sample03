import { useFetch , useCustomHook } from "../hooks/useFetch.ts"
import styles from "./CreateWord.module.css"
import {useRef } from  "react";
// import { useHistory } from  "react-router";
import { useNavigate } from  "react-router-dom";
import { useState } from "react";
import React from "react";
import {IDay} from "./DayList";

export default function CreateWord(){
    
    const days:IDay[] = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading , setIsLoading] = useState(false)
    console.log('days' , days)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        if(!isLoading && dayRef.current  && engRef.current && korRef.current ){
            setIsLoading(true)

            const day =  dayRef.current ? dayRef.current.value : ""; 
            const eng =  engRef.current ? engRef.current.value : "";
            const kor =  korRef.current ? korRef.current.value : "";

            fetch(`http://localhost:3001/words/` , {
                method : 'POST',
                headers : {
                    'content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    day: day,
                    eng: eng,
                    kor: kor,
                    isdone:false
                })
            }).then( (res) =>{
                if(res.ok){
                    alert("생성이 완료 되었습니다.");
                    setIsLoading(false)
                    navigate(`/day/${day}`)
                    
                }
            })
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return (
        <>
        <h4>createWord Form</h4>
        <form onSubmit={onSubmit}>
            <div className={styles.input_area}>
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className={styles.input_area}>
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className={styles.input_area}>
                <label>Day</label>
                <select  ref={dayRef}> 
                    <>
                    <option>
                        전체
                    </option>
                    {days.map( (data)=> (
                        <option key={data.id} value={data.day}>
                            {data.day}
                        </option>
                    ))}           
                    
                   {/* {days.map(day => (
                        <option key={day.id} value={day.day}>                
                        {day.day}
                        </option> 
                    ))} */}
                    
                    </>
                   
                </select>
            </div>      
                      
           
            <button style={{
                opacity: isLoading ? 0.3 : 1 
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
        </>
    )
    
}