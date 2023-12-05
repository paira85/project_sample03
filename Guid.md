✔️ 기본설치
npx create-react-app project_sample01

npx 오류 발생시
npm install npm -g
npm install react-router-dom
npm install react react-router react-router-dom
npm install -g json-server
/**json server setting**/
cmd cd project경로
json-server --watch ./src/db/data.json --port 3001
http://localhost:3001/days
http://localhost:3001/words
/**timescript**/
npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom

js파일 -> .ts
jsx파일 -> .tsx로 변경필요

npm start


/***********************
**1.multi componet**
************************/
function Component1(props){
    return(
        <div>함수형 컴포넌트1</div>
    );
}

const Component2 =(props) =>{
    return(
        <div>함수형 컴포넌트2</div>
    );
}

export  {Component1 , Component2}
-----------
import {Component1,Component2} from './ComponentEx';
<Component1></Component1>
<Component2></Component2>

export default 함수명   : 한개의 함수만 리턴
export {함수명, 함수명} : 여러개의 함수만 리턴

/***********************
**2. CSS : module.css**
************************/
기본 CSS  Import
import "./App.css";
module CSS  Import
module.css 명칭으로 끝나야 한다.
import styles2 from "./component/App.module.css";

✔️ sample1
<h1 style={{color: "red"}}>Hello Style!</h1>
<h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>

✔️ sample2
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}



/***********************
**3. state**
************************/
import {useState} from "react";
//arg1:변수명, arg2:함수명, arg3:"초기값"
const [name , setName] = useState("KSM");

/***********************
**4. props**
************************/
<Body age={10} name={"Mike"} />
export default function Body(props){
    //arg1:변수, arg2:함수명 
    const [name,setName] = useState(props.name);
    const [age,setAge]= useState(props.age);
}

/***********************
**5. Map**
************************/
Map
배열을 받아서 또다른 배열을 반환
JSX형태

1. 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용 한다.
2. 문법
- arr.map(callbackFunction, [thisArg])  
- arr.map(callbackFunction(currenValue, index, array), thisArg)

 1) callbackFunction : 새로운 배열의 요소를 생성하는 함수로서 다음 세가지 인수를 갖는다.     ㆍcurrenVlaue : 현재 배열(arr) 내의 값들을 의미     ㆍindex : 현재 배열 내 값의 인덱스를 의미     ㆍarray : 현재 배열  2) thisArg(선택항목) : callback 함부 내부에서 사용할 this 레퍼런스 를 설정한다.

 3) Key 값은 필수로 주어야 한다.
✔️ sample1
dummy = {
    "days": [
        {
            "id": 1,
            "day": 1
        },
        {
            "id": 2,
            "day": 2
        }
    ]
}

{dummy.days.map(day => (
        <li key={day.id}>Day {day.day}</li>
        )
    )
}
✔️ sample2
const App = () => {
  const names = [
		{userName : "갓대희", age : 19}, 
		{userName : "김대희", age : 29},
		{userName : "한대희", age : 39}
	]
	let nameList = names.filter(v => v.age < 30);
  nameList = nameList.map(v => (<Main name={v.userName} age={v.age}/>));
	return (
		<div>
			{nameList}
		</div>
	);
}

/***********************
**6. Filter**
************************/
✔️ filter() 메서드: 자바스크립트 배열의 내장 함수

주어진 함수의 테스트를 통과하는 모든 요소를 모아(true면 요소를 유지, false면 버림) 새로운 배열로 반환함. 
callback 함수는 호출되는 배열을 변화시키지 않음.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

✔️ sample
const result = words.filter(word => word.length > 6);

console.log(result);
["exuberant", "destruction", "present"]

/***********************
**7. Router**
************************/
✔️ 리액트는 SPA (Single Page Application) 방식 
- 기존 웹 페이지 처럼(MPA 방식) 여러개의 페이지를 사용, 새로운 페이지를 로드하는 방식이 아니다. 
- 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다.

1. BrowserRouter
2. Switch 
    2.1 리액트 6버전 이상에서 switch가 삭제됐다고 함
    2.2 Switch -> Routes

✔️ sample1
<Switch>  
  <Route path="/login"><Login /></Route>  
  <Route path="/"><App /></Route>  
</Switch>

<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/" element={<App />} />
</Routes>

✔️ sample2
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const productId = useParams().productId;
    const location = useLocation();
    return (
        <>
            <h3>{productId}번 상품 페이지 입니다.</h3>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
        </>
    );
}

export default Product;

/***********************
**8. Link**
************************/
<Link>는 <a> 태그처럼 링크를 연결해주지만 URL 개념 하고는 다른 path 개념이다.

리액트 라우터에서 페이지 이동할 때는 Link 컴포넌트를 사용하면 내가 이동하고자 하는 경로(URL)로 이동할 수 있다.

✔️ sample1
<Link to="/about">About</Link>


/***********************
**9. useParams**
************************/
URL로받은 파라미터를 출력한다.

✔️ sample1
<Route path="/day/:id" element={<Day />} />

import { useParams } from "react-router-dom";
:id에 해당하는값이 세팅
console.log(useParams());
{id:1}
{id:2}


/***********************
**10. useEffect**
************************/
useEffect두 가지 인수를 허용합니다. 두 번째 인수는 선택 사항입니다.
useEffect(<function>, <dependency>)

객체와 : string,int,boolean 등 ,오브제트 : {} , []
useEffect에 object형태로 선언하면 지정값이 변경되지 않아도 재 렌더링이되는
현상이있다.
useeffect에 객체 형태로 선언하면 지정값이 변경될때만 렌더링 된다.


✔️ sample1
모든 state값이 변경 될때마다 실행

useEffect(() => {
  //Runs on every render
});

✔️ sample2
한번만 실행 후 종료
state값이 변경되도 실행안됨

useEffect(() => {
  //Runs only on the first render
}, []);

✔️ sample3
prop,state 변수가 변경되면 실행

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

/***********************
**11. Todos**
************************/
불필요한 렌더링을 하지 않기 위해서 사용
todos의 값이 변경 될대만 렌더링

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;

/***********************
**11. Hook && setState**
************************/
Hooks는 버전 16.8에서 React에 추가되었습니다.

후크를 사용하면 함수 구성 요소가 상태 및 기타 React 기능에 액세스할 수 있습니다. 이로 인해 클래스 구성 요소는 일반적으로 더 이상 필요하지 않습니다.

setState가 변경될때마다 화면이 다시 렌더링됨.(리로딩)

✔️ sample1
const [color, setColor] = useState("red");

<button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
<button
type="button"
onClick={() => setColor("red")}
>Red</button>

✔️ sample2

const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
});

const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }


/***********************
**11. useContext && 값을 지속적으로 넘김, 출력할때까지**
************************/
Hook 과 함께 사용하면 단독 useState으로 사용하는 것보다 깊게 중첩된 구성 요소 간에 상태를 더 쉽게 공유 할 수 있습니다 useState.
const [user, setUser] = useState("Jesse Hall");

✔️ sample1
return (
<>
    <h1>{`Hello ${user}!`}</h1>
    <Component2 user={user} />
</>
);


function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <h3>{user}</h3>
    </>
  );
}

Hello Jesse Hall!
Component 2
Component 3
Hello Jesse Hall again!

✔️ sample2
전역적으로 사용할수 있는 데이터를 제공,
세션정보, 배경테마 등과 모든 페이지에서 사용이 필요할때

---ThemeContext.js
import {createContext} from "react";
export const ThemeContext = createContext(null);

---App.js
return (
    <Themecontexct.Provider value={ param1, param2}>
        <Component names>
    </ThemeContext.Provider>
)

---Component.js
import {ThemeContext} from "../경로"
conet data = useContext(ThemeContext);
console.log('data : ' data)

/***********************
**12. useRef 값 유지 && Dom접근 && 이전값 추적**
************************/

Hook useRef을 사용하면 렌더링 간에 값을 유지할 수 있습니다.
업데이트 시 다시 렌더링되지 않는 변경 가능한 값을 저장하는 데 사용할 수 있습니다.
DOM 요소에 직접 액세스하는 데 사용할 수 있습니다.


Hook 을 사용하여 애플리케이션이 렌더링되는 횟수를 계산하려고 하면 useState이 Hook 자체가 다시 렌더링을 유발하므로 무한 루프에 빠지게 됩니다.


const ref = useref(value)
ref - > { Current : value }
ref.current = "value"

useref -> 값이 수저되도 화면을 렌더링 하지 않는다. 
실제 변경은 이루어 졌지만 화면상에는 바뀐 값으로 표현이 안됨.


사용방법,
1. 저장공간에 사용
>>>>> 렌더링이 되더라도 값들이 유지됨.

2. Dom 노드에 접근 가능
>>>>> focus() 대표적으로 


이를 방지하기 위해 Hook을 사용할 수 있습니다 useRef.
✔️ sample1
import { useState, useEffect, useRef } from "react";

const [inputValue, setInputValue] = useState("");
const count = useRef(0);

useEffect(() => {
    count.current = count.current + 1;
});

useRef()하나의 항목만 반환합니다. 이라는 객체를 반환합니다 current.
초기화할 때 useRef초기값을 설정합니다: useRef(0).

<input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
/>
<h1>Render Count: {count.current}</h1>

✔️ sample2
일반적으로 우리는 React가 모든 DOM 조작을 처리하도록 하려고 합니다.
useRef그러나 문제를 일으키지 않고 사용할 수 있는 경우도 있습니다 .
React에서는 ref요소에 속성을 추가하여 DOM에서 직접 액세스할 수 있습니다.

const inputElement = useRef();

const focusInput = () => {
    inputElement.current.focus();
};

<input type="text" ref={inputElement} />
<button onClick={focusInput}>Focus Input</button>

✔️ sample3
이전 값 세팅

const [inputValue, setInputValue] = useState("");
const previousInputValue = useRef("");

useEffect(() => {
    previousInputValue.current = inputValue;
}, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );


✔️ sample4
const inputRef = useref();

useEffect( () => {
    inputRef.current.focuse()
})

<input ref={inputRef} type="text" />

/***********************
**13. useReducer && custom state**
************************/
후크 는 후크 useReducer와 유사합니다 useState.
사용자 정의 상태 논리를 허용합니다.
복잡한 논리에 의존하는 여러 상태를 추적하는 경우 useReducer유용할 수 있습니다.

>>> Reducer , Dispatch, Action 구성으로 이루어져 있다.
>>> dispath(Action) : 요구 내용을 전달
>>> Reducer 처리하는 영역
>>> state 처리 하고 난 상태
Reducer(state,action) -> update state


todos : initialTodos데이터의변수명
dispatch : reducer 함수를 호출
reducer : 함수
initialTodos : 초기 데이터
const [todos, dispatch] = useReducer(reducer, initialTodos);

✔️ sample1
useReducer(<리듀서>, <initialState>)

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

state : initialTodos : 초기 데이터
action : dispatch({ type: "COMPLETE", id: todo.id })
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                <label>
                    <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleComplete(todo)}
                    />
                    {todo.title}
                </label>
                </div>
            ))}
        </>
    );
}


✔️ sample2
money를 수정하고 싶을때마다 dispatch 를 요청
import {useReducer} fro "react";

App 영역 밖에다 선언
const ACTION_TYPES = {
    deposit : 'deposit',
    withdraw : 'withdraw',
}

const reducer = (state, action) =>{
    console.log('reducer 호출');
    switch(action.type){
        case : ACTION_TYPES.deposit:
            return state + action.playload;
        case : ACTION_TYPES.withdraw:
            return state - action.playload;
        default :
            return state;
    }    
}

function App(){
    const [number , setNumber] = useState(0)
    const [money , dispatch] = useReducer(reducer, 0)

    return {
        <div>
            <inputy type="number" value={number} onChange={(e) =>{
                setNumber(parseInt(e.target.value))
            }}>
            <button onClick={() =>{
                dispatch({type: ACTION_TYPES.deposit , payload : number})
            }}예금</button>
             <button onClick={() =>{
                dispatch({type: ACTION_TYPES.withdraw , payload : number})
            }}출금</button>
        </div>        
    }
}

✔️ sample3

const reducer = (state, action) =>{
    console.log('reducer 호출');
    switch(action.type){
        case : 'add':
            const name = return state + action.playload.name;
            const newStudent  = {
                id : Date.now(),
                name,
                isHere : false
            }

            return {
                count : state.count+1,
                students : [...state.students , newStudent]
            }
        case : 'del':
            return{
                count:state.count-1,
                students:state.students.filter(
                    (student) => student.id !== axtion.playload.id
                )
            }
        case : 'mark':
            return {
                count:state.count,
                students:state.students.map(
                    (student) => {
                        if(student.id !== axtion.playload.id){
                            return {...student , isHere:!student.isHere}
                        }
                        return student
                    }
                )
            }
        default :
            return state;
    }    
}

const initlaState = {
    count = 0,
    students : []
}
function App(){
    const [name , setName] = useState(0)
    const [studentinfo , dispatch] = useReducer(reducer,initlaState );

    return {
        <div>
            <inputy type="text" value={name} onChange={(e) =>{
                setName(parseInt(e.target.value))
            }}>

            <button onClick={() =>{
                dispatch({type: 'add' , payload : {name} })
            }} 추가</button>

            {
                studentinfo.students.map( (student) =>{
                    return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id}
                    idHere={student.isHere} /> 
                })
            }
           
        </div>        
    }
}

Student.js
const Student = ( {name, dispatch, id,isHere}){
    return (
        <div>
            <span style={
                {
                    textDecoration : isHere ? 'line-through':'none',
                    color: isHere ? 'gray','black'                    
                }
            }
            onClick ={
                () =>{
                    dispatch({type:'mark', payload: {id}})
                }
            }>{name}</span>
            <button onClick={ ()=>{
                dispatch( {type:'del',payload: {id} })  
            }}>삭제</button>
        </div>
    )
}

export default Student;



/***********************
**14. usecallback && useMemo와 비슷한 성질의 형태**
************************/
콜백함수 그자체를 useMemo형태로 사용
함수형 컴포넌트 

import {useCallback} from "react";

const calculate = usecallback( () =>{
    return ""
} , [item])

✔️ sample1
React useCallbackHook은 메모된 콜백 함수를 반환합니다.
메모이제이션은 값을 다시 계산할 필요가 없도록 값을 캐싱하는 것으로 생각하십시오.

const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);

const increment = () => {
    setCount((c) => c + 1);
};
const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
};

return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

✔️ sample2
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);

✔️ sample3
const [number, setNumber] = usestate(0);
const [toggle, setToggle] = usestate(true);

const someFunction = useCallback( ()=>{
    console.log('someFunc : 호출')
    return
} , [number]);

useEffect( ()=>{
    console.log( 'someFunction 이 변경되었스니다.')
})

<button onClick={()=>setToggle(!toggle)}>toggle {toggle}</button>
<button onClick={somFunction}>call Somefunc</button>

>>>>>> toggle의 버튼을 아무리 눌러도 somefunction는 호출이 되지 않는다.
number 값이 변경 될때만 함수가 재실행된다.

>>>>>> call somefunc버튼을 클릭하면 현재의 number값을 호출한다.
>>>>>> useCallback이 메모이제이션 형태라도 number 값이 변경 될대
재 선언을 하기 때문이다.

✔️ sample4 
Change Dark 변경을 하더라도 Box 컴포넌트가 실행도지 않도록 처리 
size가 변경될때만 Box 컴포넌트를 호출해서 사이즈를 변경한다.

useCallback을 선언하지 않는다면, change Dark실행시 사이즈변경
컴포넌트가 매번실행된다.

const [size,setSize] = useState(100)
const [isDark,setUsDark] = useState(false)

const createBoxStyle= useCallback( () =>{
    return{
        baclgroundColr:'pink',
        width:`${size}px`,
        height:`${size}px`
    }
}, [size])

return (
    <div style={{
        background : isDark ? : 'black':'white',
    }}>        
    <input type="number" value={size} onChange={(e)=>setSizes(e.target.value)}>
    <button  onClick={setIseDark(!isDark)}>Change Dark </button>
    <Box createBoxStyle={createBoxStyle}> />
    </div>
)

Box.js
export default Box function( {createBoxStyle} ) => {
    const [style,setStyle]=useState({});

    useEffect( ()=>{
        setStyle(createBocStyle());
    })
    return <div style={style}></div>

}

/***********************
**15. useMemo && 메모리에 저장하고 메모리에서 읽음**
************************/

대표적으로 메뉴 또는 로그인한 사용자 정보에 적용
Cache 된 값, 메모리에 올려 두고 꺼내서 사용

✔️ sample1
메모리를 사용해서 처음에 사용한 데이터를 가지고 있음.
렌더링이 되어도 재 사용하지 않고 메모리에 올려 놓은 데이터를 재 사용

const value = useMemo(() =>{
    return "리턴값"
} , [item] 배열안의 값이 업데이트 될때만 재 사용)

const value = useMemo(() =>{
    return "리턴값"
} , [] 빈 배열은 처음 값만 사용)

렌더링 시 불필요한 함수 호출또는 렌더링을 제거할때
useMemo 사용


✔️ sample2
ook은 useMemo종속성을 선언하기 위해 두 번째 매개변수를 허용합니다. 비용이 많이 드는 함수는 종속성이 변경된 경우에만 실행됩니다.

다음 예에서 비용이 많이 드는 함수는 count 할 일이 추가될 때가 아니라 변경될 때만 실행됩니다.

const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );

✔️ sample3
const [number, setNumber] = useState(0)
const [usKorea, setIsKorea] = useState(true)

const location =  isKorea ? "한국":"외국";

렌더링 할때마다 useEffect 호출
useEffect( () = >{
    console.log('useEffect 호출')
} , [location])

✔️ sample4
const [number, setNumber] = useState(0)
const [usKorea, setIsKorea] = useState(true)

const location =  useMemo ( () =>{
    country : isKorea ? "한국":"외국",
} , iseKorea)

렌더링 되어도 useEffect 변경되지 않음
useEffect( () = >{
    console.log('useEffect 호출')
} , [location])



/***********************
**16. custom hook && useFetch && Get  DATA**
************************/
Hooks는 재사용 가능한 함수입니다.

여러 구성 요소에서 사용해야 하는 구성 요소 논리가 있는 경우 해당 논리를 사용자 정의 후크로 추출할 수 있습니다.

커스텀 후크는 "사용"으로 시작됩니다. 예: useFetch.

데이터를 가져오기 위한 후크

const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );


const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

/**17 Outlet***/
Outlet :사용법 부모화면 그대로 두고 서브 페이지 전환 
 
<Route path="/" element={<DayList />} >
    <Route path="/day/:id" element={<Day />} />
    <Route path="/create_word" element={<CreateWord />} />
</Route>

✔️ sample1
import { Outlet } from 'react-router-dom';

<DayList>
    return(
        <Outlet /> 
    )
</DayList>


/**18 useRef***/
참조값
참조하는 대상에 접근해서 데이터 얻기

✔️ sample1
import {useRef } from  "react";

function onSubmit(e){
    e.preventDefault()
    console.log(engRef.current.value)
    console.log(korRef.current.value)
    console.log(dayRef.current.value)
}

const engRef = useRef(null);
const korRef = useRef(null);

<form onSubmit={onSubmit}>
    <div className={styles.input_area}>
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}/>
    </div>
    <div className={styles.input_area}>
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}/>
    </div>
    <button>저장</button>
</form>

/**17 useNavigate***/
페이지 전환을 위한 작업

✔️ sample1
const navigate = useNavigate();
navigate(`/`)

interface IPropos {
    word : Iword;
    wordKey : number;
}

/**18 typescript***/
Props의 타입을지정한다.
js파일 -> .ts
jsx파일 -> .tsx로 변경필요

js 파일에서 tsx 파일 읽을때
import Word from "./Word.tsx";

tsx 파일에서 tsx 파일 읽을때
import Word from "./Word";

✔️ sample1
Word.tsx
import React from "react";

interface IPropos {
    word : Iword;
    wordKey : number;
}

export 다른파일에서 사용가능
export interface Iword {
    day: String;
    eng: String;
    kor: String;
    isDone: boolean;
    id: number;
}

word. property 사용가능

export default function Word({word:w, wordKey} : IPropos ){
    
}


✔️ sample2
Day.tsx
import React from "react";
import Word  ,{Iword} from "./Word";

const { day } = useParams<{day:string}>();    
let words : Iword[] = useFetch(`http://localhost:3001/words?day=${day}`)
console.log('words ' , words)

✔️ sample3
DayList.tsx

import React from "react";

export interface IDay {
    id:number;
    day:number;
}

const days:IDay[] = useFetch(`http://localhost:3001/days`)

✔️ sample4
CreateWord.tsx

import React from "react";
import {IDay} from "./DayList";

const days:IDay[] = useFetch("http://localhost:3001/days");

submit form type = React.formEvent
function onSubmit(e: React.FormEvent){}

useRef type = Tag의 element 지정
const engRef = useRef<HTMLInputElement>(null);
const korRef = useRef<HTMLInputElement>(null);
const dayRef = useRef<HTMLSelectElement>(null);

current사용시 null이존재할수있기때문에 사전 검증필요
const day =  dayRef.current ? dayRef.current.value : ""; 
const eng =  engRef.current ? engRef.current.value : "";
const kor =  korRef.current ? korRef.current.value : "";

/**18 function***/
함수형은 렌더링 될때마다 재실행된다.
그 이유는
함수형은 메모리에 함수 정보 정보를 저장해두고,
변수는 함수의 위치 값을 갖고있다.

내부에 코딩한 내용이 광범위 하기 때문에 주소 값으로 설정된다.
그렇기 때문에 렌더링 되면 함수형은 새로운 주소 값이 할당 된다.

useEffect에서는 이 함수형을 새로운 값으로 인지한다.
결구 함수형은 렌더링시 매번 호출이 된다.

이를 방지하려면  -> useCallback을 사용

const someFunction = () =>{
    console.log('someFunction 호출')   
    return;
}