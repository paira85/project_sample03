✔️ ES6
ES6(ECMAScript6)는 무엇인가요?
1. ECMAScript 2015로도 알려져 있는 ECMAScript 6는 ECMAScript 표준의 가장 최신 버전입니다. 
2. ES6는 새로운 언어 기능이 포함된 주요 업데이트이며, 2009년도에 표준화된 ES5 이후로 언어 기능에 대한 첫 업데이트이기도 합니다. 
3. 현재 주요 JavaScript 엔진들에서 ES6 기능들을 구현 중에 있습니다.
ES6는 아래의 새로운 기능들을 포함하고 있습니다.

4. ECMAScript 2015는 JavaScript의 두 번째 주요 개정판이었습니다.
5. ECMAScript 2015는 ES6 및 ECMAScript 6으로도 알려져 있습니다.

- const and let
-  Arrow functions(화살표 함수)
- Template Literals(템플릿 리터럴)
- Default parameters(기본 매개 변수)
- Array and object destructing(배열 및 객체 비구조화)
- Import and export(가져오기 및 내보내기)
- Promises(프로미스)
- Rest parameter and Spread operator(나머지 매개 변수 및 확산 연산자)
- Classes(클래스)


ES6(2015)에 대한 브라우저 지원
Safari 10과 Edge 14는 ES6를 완벽하게 지원하는 최초의 브라우저였습니다.

Chrome 58	Edge 14	    Firefox 54	Safari 10	Opera 55
Jan 2017	Aug 2016	Mar 2017	Jul 2016	Aug 2018

https://www.w3schools.com/js/js_es6.asp
https://www.w3schools.com/js/js_es6.asp

/***********************
**1. const**
************************/
const는 var보다 강력하고 일단 사용되면 변수를 다시 할당할 수 없습니다. 즉, 객체와 함께 사용할 때를 제외하고는 변경 불가능한 변수 입니다.

1. 정의된 변수는 재선언const 할 수 없습니다.
2. 정의된 변수는 재할당const 할 수 없습니다.
3. 배열의 요소 변경, 객체의 속성은 변경 가능

TOP : let & const = Internet Explorer 11 이하에서는 지원되지 않습니다.

✔️ 예를 들어 이벤트를 실행하는 단일 단추가 있거나 JavaScript에서 HTML 요소를 선택하려면 var 대신 const를 사용하십시오.
ㅕㅕ
✔️ sample1
// ES5
var MyBtn = document.getElementById('mybtn');

// ES6
const MyBtn = document.getElementById('mybtn');

✔️ sample2
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

✔️ sample3
javaScript const변수는 선언될 때 값을 할당해야 합니다.
const PI = 3.14159265359;

✔️ sample4
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

✔️ sample5
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

/***********************
**2. let**
************************/
1. 정의된 변수는 재선언let 할 수 없습니다.
2. let은 새로운 값을 가질 수도 있고 재할당할 수도 있습니다. 
3. 변경 가능한 변수가 생성됩니다.
4. 블록 범위를let 갖는 것으로 정의된 변수

5. let은 const와 동일하게 모두 블럭 범위라는 점입니다. 
6. 즉, 변수는 범위 내에서만 사용할 수 있습니다.

TOP : let & const = Internet Explorer 11 이하에서는 지원되지 않습니다.

✔️ sample1(변경 가능 )
let name = 'A';
name = 'B';

console.log(name);
// 출력 => 'B'


✔️ sample2(변경 불가능 )
let x = "John Doe";
let x = 0;

/***********************
**3. 화살표 함수 && for/of 루프**
************************/
화살표 함수는 정말 멋지고, 코드를 더 읽기 쉽고, 더 체계적이고, 최신 코드처럼 보이게 합니다.

✔️ sample1
// ES6 화살표 함수
const myFunc = (name) => {
	return `안녕 ${name}`;
}

const myFunc = (name) => `안녕 ${name}`;
console.log(myFunc('영희')); 
// 출력 => 안녕 영희

✔️ sample2
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
const x = (x, y) => { return x * y };

✔️ sample3
배열에 대한 반복문
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

// 출력 => BMW
// 출력 => Volvo
// 출력 => Mini

✔️ sample4
문자열에 대한 반복문
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}


/***********************
**4. Filter && Map**
************************/
배열값을 배열로 리턴한다.

✔️ sample1
// ES5
const myArrary = ['진수', '영철', '영희', 5];
let arr1 = myArrary.map(function(item) {
	return item;
});

console.log(arr1); // 출력 => (4) ["진수", "영철", "영희", 5]
✔️ sample2
// ES6
let arr2 = myArrary.map((item) => item);
console.log(arr2); // 출력 => (4) ["진수", "영철", "영희", 5]

✔️ sample3

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");
fruits.delete("apples");
fruits.clear();
fruits.has("apples");

✔️ sample4

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}

// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}

// List all values
let text = "";
for (const x of fruits.values()) {
  text += x;
}


/***********************
**5. Template Literals(템플릿 리터럴)**
************************/
✔️ sample1
// ES5
function myFunc1() {
	return '안녕' + name + '너의 나이는' + age + '살 이다!'; 
}

console.log(myFunc1('영희', 22));
// 출력 => 안녕 영희 너의 나이는 22살 이다!

✔️ sample2
// ES6
const myFunc = (name, age) => {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`; 
};

console.log(myFunc1('영희', 22));
// 출력 => 안녕 영희, 너의 나이는 22살 이다!

/***********************
**6. Default parameters(기본 매개 변수)**
************************/
✔️ sample1
const myFunc = (name, age) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`; 
};

console.log(myFunc1('영희'));
// 출력 => 안녕 영희 너의 나이는 undefined살 이니?

✔️ sample2
onst myFunc = (name, age = 22) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`; 
};

console.log(myFunc1('영희'));
// 출력 => 안녕 영희 너의 나이는 22살 이니?

✔️ sample3

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15

✔️ sample4
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

/***********************
**7. Array and object destructing(배열 및 객체 비구조화)**
************************/
✔️ sample1
// ES6 문법
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};

let { famillyName, name, age } = contacts;

console.log(famillyName);
console.log(name);
console.log(age);

/***********************
**8. Import and export(가져오기 및 내보내기)**
************************/
export를 사용하면 다른 JavaScript 구성 요소에 사용할 모듈을 내보낼 수 있습니다. 
우리는 그 모듈을 우리의 컴포넌트에 사용하기 위해 가져오기 import를 사용합니다.

✔️ sample1
// ES6
export default function detail(name, age) {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
}

✔️ sample2
둘 이상의 모듈을 가져오려는 경우, 중괄호에 넣기만 하면 됩니다.
import { detail, userProfile, getPosts } from './detailComponent';
console.log(detail('영희', 20));
console.log(userProfile);
console.log(getPosts);

/***********************
**9. Promises(프로미스)**
************************/
Promise는 ES6의 새로운 특징입니다. 비동기 코드를 쓰는 방법입니다. 
예를 들어 API에서 데이터를 가져오거나 실행하는데 시간이 걸리는 함수를 가지고 있을 때 사용할 수 있습니다. 
Promise는 문제를 더 쉽게 해결할 수 있으므로 첫 번째 Promise를 만들어 봅시다!

✔️ sample1
const myPromise = () => {
	return new Promise((resolve, reject) => {
		resolve('Promise가 성공적으로 실행했습니다');
	});
};

cosole.log(myPromise());
// Promise {<resolved>: "Promise가 성공적으로 실행했습니다"}

콘솔을 기록하면 Promise가 반환됩니다. 
데이터를 가져온 후 함수를 실행하려면 Promise를 사용합니다. 
Promise는 두 개의 매개 변수를 사용하며 resolve및 reject 예상 오류를 처리 할 수 있습니다.

✔️ sample2
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

/***********************
**10. fetch**
************************/
fetch 함수는 Promise 자체를 반환합니다!

✔️ sample1
const url = 'https://jsonplaceholder.typicode.com/posts';
const getData = (url) => {
	return fetch(url);
};

getData(url).then(data => data.json()).then(result => console.log(result));
이제 콘솔을 기록하면 데이터 배열이 반환됩니다.

/***********************
**11. Rest parameter and Spread operator**
************************/

Rest parameter는 배열의 인수를 가져오고 새 배열을 반환하는데 사용됩니다.

✔️ sample1
const arr = ['가', 10, '다', '라', '마', '바사'];

// 비구조화를 이용한 값을 얻기
const [ val1, val2, val3, ...rest ] = arr;

const Func = (restOfArr) => {
	return restOfArr.filter((item) => {return item}).join(" ");
};

console.log(Func(rest)); // 가 10 다 라 마 바사

✔️ sample2

Spread operator는 Rest parameter와 구문이 동일하지만 Spread operator는 인수뿐만 아니라 배열 자체를 가집니다. for 반복문이나 다른 메서드를 사용하는 대신 Spread operator를 사용하여 배열의 값을 가져올 수 있습니다.

const arr = ['가', 10, '다', '라', '마', '바사'];

const Func = (...anArray) => {
	return anArray;
};

console.log(Func(arr));
// 출력 => ["가", 10, "다", "라", "마", "바사"]

✔️ sample3

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

// 출력 => Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May

✔️ sample4
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

// 출력 => 87

/***********************
**12. Classes(클래스)**
************************/
class는 객체 지향 프로그래밍(OOP)의 핵심입니다. 코드를 더욱 안전하게 캡슐화할 수 있습니다. 
class를 사용하면 코드 구조가 좋아지고 방향을 유지합니다.

✔️ sample1
class myClass {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const user = new myClass('영희', 22);

console.log(user.name); // 영희
console.log(user.age); // 22


✔️ sample2
다른 class에서 상속하려면 extends 키워드 다음에 상속할 class의 이름을 사용합니다.

class myClass {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`안녕 ${this.name} 너의 나이는 ${this.age}살이다`);
	}
}

✔️ sample3

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
/***********************
**13. Multi-line String**
************************/
문자열이 라인을 넘어가게 되면 ‘\n’ 과 덧셈 연산자를 사용했어야했다.
백틱을 사용하게 되면서 여러줄의 문자열 관리도 편해졌다.
✔️ sample1
// ES5
var str = 'asdhasfhfsahsfhfshasfhsfahsfahsfahasfh.\n' + 
'mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm.\n'

✔️ sample2
// ES6
let str = `asdhasfhfsahsfhfshasfhsfahsfahsfahasfh
mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm`;

/***********************
**14. Module**
************************/
모듈이란, 재사용하기 위한 코드 조각을 뜻하며, 세부사항은 캡슐화 시키고, API 부분만 외부에 노출시킨 코드이다.
type에 module을 추가시키고 확장자를 mjs로 변경하여 사용한다.
모듈은 모듈 스코프를 가지며, import와 export 키워드를 이용하여 사용한다.
<script type="module" src="lib.mjs"></script>

/***********************
**15. Set && forEach**
************************/
✔️ sample1
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

let text = "";
letters.forEach (function(value) {
  text += value;
})

a
b
c

✔️ sample2
// Create an Iterator
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}

a
b
c

/***********************
**16. array find**
************************/
find()메서드는 테스트 함수를 통과한 첫 번째 배열 요소의 값을 반환합니다.
이 예에서는 18보다 큰 첫 번째 요소를 찾습니다(값을 반환합니다).

✔️ sample1
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}