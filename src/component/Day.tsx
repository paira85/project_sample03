import dummy from "../db/data.json";
import {  useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import {useFetch, useCustomHook }  from "../hooks/useFetch.ts";
import React from "react";
import Word, { Iword }  from "./Word.tsx";


// //상태를 위한 타입  (db datajson 타입설정함)
// export type SubjectdataType = {
//     id: number;
//     day: number;
// }

// export type ListdataType = { //(db datajson 타입설정)
//     "id": number; 
//     "day": string;
//     "eng": string;
//     "kor": string;
//     "isDone": boolean;
// }
export default function Day(){
    // let  aaa : UDummy = JSON.parse(dummy.words.toString());
    // const  aaa :  ListdataType[] = JSON.parse(dummy.words.toString());
    // console.log( dummyWord );
    // console.log(useParams());
  
    console.log( dummy.words);
    const day  = useParams().id;     
    // const param = useParams();     
    // let day = param.id
    // console.log('param' , param)
    let words:Iword[] = useFetch(`http://localhost:3001/words?day=${day}`)
    // console.log('words ' , words)
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    // const [words , setWords] = useState([])

    // useEffect( () =>{
    //     fetch(`http://localhost:3001/words?id=Number(${day})`)
    //         .then( res => {
    //             return res.json()
    //         })
    //         .then( data => {
    //             setWords(data)
    //         })
    // }, [day]) 
    
    // console.log(words);
    if(words.length === 0 ){
        return <div>Loading...</div>
    }

    return (<>
        
        <h3>Day {day}</h3>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} wordKey={word.id} key={word.id} />    
                ))}
            </tbody>
        </table>    
    </>);
}