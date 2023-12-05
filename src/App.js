import {Header,Nav} from "./component/Header";
//import Body from './component/Body';
import Day from './component/Day.tsx';
import DayList from './component/DayList.tsx';
import Footer from './component/Footer';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import "./App.css";
import CreateWord from "./component/CreateWord.tsx";
import CreateDay from "./component/CreateDay";
import React from 'react';

function App() {
  return (    
    <div className="App">       
    <BrowserRouter>
          <Header />
          <Routes>
            {/* Outlet :사용법 부모화면 그대로 두고 서브 페이지 전환 */}
            {/* <Route path="/" element={<DayList />} >
              <Route path="/day/:id" element={<Day />} />
              <Route path="/create_word" element={<CreateWord />} />
            </Route> */}
            <Route path="/" element={<DayList />} />
            <Route path="/day/:id" element={<Day />} />
            <Route path="/create_word" element={<CreateWord />} />
            <Route path="/create_day" element={<CreateDay />} />
            
            <Route path="/*" element={<EmptyPage />} />
          </Routes>
          <Footer />          
    </BrowserRouter>    
    </div>
  );
}

export default App;
 