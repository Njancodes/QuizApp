
function Question(props){


    const giveAns = (ev)=>{
        let optionClicked = ev.target;
        let chosen = optionClicked.textContent;
        if(chosen == props.answer){
            optionClicked.classList.add("correct");
            optionClicked.classList.remove('option');
        }else{
            optionClicked.classList.add('wrong'); 
            optionClicked.classList.remove('option');
        }
    }

    return(
        <>
            <h1 className="title" id="question">{props.question}</h1>
            <div className="options">
                <button className="option" onClick={giveAns}>{props.options[0]}</button>
                <button className="option" onClick={giveAns}>{props.options[2]}</button>
                <button className="option" onClick={giveAns}>{props.options[1]}</button>
                <button className="option" onClick={giveAns}>{props.answer}</button>
            </div>
        </>
    )
}

export default Question;