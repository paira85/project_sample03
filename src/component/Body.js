import {useState} from "react";
import DayList from "./DayList";
import Day from "./Day";

export default function Body(props){
    //arg1:변수, arg2:함수명 
    const [name,setName] = useState(props.name);
 
    return <div style={{
            width:"100%",
        }}> 
        <DayList />
        <Day />
        </div>
    ;
    
}
//<div className={styles.box} > App Box</div>