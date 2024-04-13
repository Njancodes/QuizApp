import Question from "../components/Question.jsx";
import data from "../assets/questions.json"
import React, {useState} from 'react';


function QuizPage(){

  let questions = data.questions;

  const [counter, setCounter] = useState(0);
  const [item, setItem] = useState(questions[counter]);
  const nextQuestion = ()=>{
    document.querySelectorAll('button.wrong').forEach((item)=>{
      item.classList.remove('wrong');
      item.classList.add('option');
    })

    document.querySelectorAll('button.correct').forEach((item)=>{
      item.classList.remove('correct');
      item.classList.add('option');
    })
    if(counter < questions.length - 1){
      console.log(counter)
      setCounter(counter + 1)
      setItem(questions[counter + 1]);
      console.log(counter)



    }else{
      setCounter(0)
      setItem(questions[0]);
    }
  }

  const showAddQuestion = ()=>{
    let addForm = document.querySelector('div.add');
    if(addForm.classList.contains('hidden')){
      addForm.classList.remove('hidden')
    }else{
      addForm.classList.add('hidden')
    }
  } 

  const addQuestion = () => {
    const question = document.getElementById('question-in').value;
    const optionOne = document.getElementById('option-in-1').value;
    const optionTwo = document.getElementById('option-in-2').value;
    const optionThree = document.getElementById('option-in-3').value;
    const ans = document.getElementById('answer-in').value;

    let addForm = document.querySelector('div.add');
    if(addForm.classList.contains('hidden')){
      addForm.classList.remove('hidden')
    }else{
      addForm.classList.add('hidden')
    }

    data.questions.push({
      question: question,
      options: [optionOne, optionTwo, optionThree],
      answer: ans
    })

    document.getElementById('question-in').value = '';
    document.getElementById('option-in-1').value = '';
    document.getElementById('option-in-2').value = '';
    document.getElementById('option-in-3').value = '';
    document.getElementById('answer-in').value = '';


    console.log(data);
    


  }

  return(
    <>
      <Question question={item.question} answer={item.answer} options={item.options}/>
      <div className="next-btn">
        <button onClick={nextQuestion}>Next</button>
      </div>
      <div className="add-btn" onClick={showAddQuestion}>
        <button>Add a Question</button>
      </div>
      <div className="add hidden">
        <label htmlFor="
        ">Question: <input type="text" id="question-in"/></label><br />
        <label htmlFor="
        ">Option 1:<input type="text" id="option-in-1"/></label><br />
        <label htmlFor="
        ">Option 2:<input type="text" id="option-in-2"/></label><br />
        <label htmlFor="
        ">Option 3:<input type="text" id="option-in-3"/></label><br />
        <label htmlFor="
        ">Answer:<input type="text" id="answer-in"/></label>
        <button onClick={addQuestion}>
          Add Question
        </button>
      </div>
    </>
  )
}

export default QuizPage;