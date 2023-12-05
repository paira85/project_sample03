import {useState} from "react";
import styles from "./Body.module.css";
import React from "react";
/**
* REST API
  CRUD
**/

interface IPropos {
    word : Iword;
    wordKey : number;
}

export interface Iword {
    day: String;
    eng: String;
    kor: String;
    isDone: boolean;
    id: number;
}

export default function Word({word:w} : IPropos ){
    const [word,setWord] = useState(w)
    const [isShow,setIsShow] = useState(false)
    const [isDone,setIsDone] = useState(word.isDone)

    function toglleShow(){
        setIsShow(!isShow)        
    } 


    function toogleCheck(){
        // setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${word.id}` , {
            method : 'PUT',
            headers : {
                ///보내는 리소스의 형태
                //json 형태로 전송
                'content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
        }).then( (res) =>{
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    } 

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method : 'DELETE',
                headers : {
                    ///보내는 리소스의 형태
                    //json 형태로 전송
                    'content-Type' : 'application/json'
                }
            }).then( res =>{
                if(res.ok){
                    setWord({
                        ...word,
                        id:0
                    })
                }
            })
        }
    }
    
    if( word.id === 0){
        return null;
    }

    return (
        <tr className={isDone ? styles.off : ''}>
            <td><input type="checkbox"  checked={isDone} onChange={toogleCheck} /></td>
            <th>{word.eng}</th>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toglleShow}>뜻 보기</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr> 
    )
}