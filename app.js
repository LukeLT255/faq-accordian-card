const questions = document.querySelectorAll(".section");

console.log(questions);

questions.forEach(question => {
    question.addEventListener('click', handleClick);
});


function handleClick(event) {
    questions.forEach(question => {
        if (event.currentTarget.children[1] !== question.children[1]){
            question.children[1].classList.add("hidden");
            question.children[0].children[0].classList.remove("bold");
            question.children[0].children[1].classList.remove("flip");
        }
        
    });
    event.currentTarget.children[0].children[0].classList.toggle('bold');
    event.currentTarget.children[0].children[1].classList.toggle('flip');
    event.currentTarget.children[1].classList.toggle('hidden');
    
}