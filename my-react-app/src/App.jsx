import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exam3 from './components/Exam3'
import Exam4 from './components/Exam4'
import Exam5 from './components/Exam5'
import Exam6 from './components/Exam6'
import TodoList from './components/TodoList'
import Exam7 from './components/Exam7'

function App() {
  // 상태 (state)
  // const [count, setCount] = useState(0)
  const [showExam, setShowExam] = useState(true);

  return (
    // js 주석
    // <> </> : fragment (html 역할 X)
    /**/
  <>
    {/*  */}
    {/* <h1>안녕하세요!</h1> */}
    {/* <button onClick={() => setShowExam(!showExam)}>클릭</button>
    {showExam && <Exam2 mihyun="hello" test="world"/>} */}
    {/* 조건부 렌더링 : 조건에 따라 렌더링되는 방법
      && 앞에 있는 showExam이 true 면 Exam1 렌더링됨
                            false 면 Exam1 렌더링되지 않음
    */}
    {/* <Exam5 /> */}
    {/* <TodoList/> */}
    <Exam7 />
    
  </>
   
  )
}

export default App
