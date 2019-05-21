/* jshint esversion: 9 */
/* jshint strict: global */
/* jshint devel: true */
'use strict';

import quizdata from './quiz-data.js';



/*<h2 class="questions-form-title">Заголовок теста</h2>
<ul class="questions-list">

    <li class="questions-list-item">
        <section class="question-card">
            <h3 class="question-card-title">1. Текст вопроса</h3>
            <ol class="answers-list">
                <li class="answers-list-item">
                    <input type="radio" name="question-1" value="" id="answer-1" class="answer-check visually-hidden"/>
                    <label class="answer-check-label" for="answer-1">Ответ 1</label>
                </li>
                <li class="answers-list-item">
                    <input type="radio" name="question-1" value="" id="answer-2" class="answer-check visually-hidden"/>
                    <label class="answer-check-label" for="answer-2">Ответ 2</label>
                </li>
            </ol>
        </section>
    </li>

</ul> */

/* ================== create objects =================== */
createForm();

function createForm() {
    const quizes = [...quizdata.questions];
    const quizesTitle = quizdata.title;
    const form = document.querySelector('form.questions-form')

    const formTitle = createElementWithClass('h2', 'questions-form-title');
    formTitle.textContent = quizesTitle;

    const questionsList = createElementWithClass('ul', 'questions-list');

    const listOfQuestions = quizes.reduce((aggr, question, index) => {
        questionsList.appendChild(createQuestionElement(index, question.question, question.choices));
        return questionsList;
    }, questionsList);

    form.prepend(listOfQuestions);
    form.prepend(formTitle);
}


function createQuestionElement(questionId, question, choices) {
    const questionsListItem = createElementWithClass('li', 'questions-list-item');

    const sectionQuestionCard = createElementWithClass('section', 'question-card');
    const questionCardTitle = createElementWithClass('h3', 'question-card-title');
    questionCardTitle.textContent = question;

    const answersListelement = createElementWithClass('ol', 'answers-list');
    const answersList = choices.reduce((aggr, choice, index) => {
        answersListelement.appendChild(createAnswerListItem(questionId, index, choice));
        return answersListelement;
    }, answersListelement);

    sectionQuestionCard.appendChild(questionCardTitle);
    sectionQuestionCard.appendChild(answersList);
    questionsListItem.appendChild(sectionQuestionCard);
    return questionsListItem;
}

function createAnswerListItem(questionId, answerId, answerText) {
    const answersListItem = createElementWithClass('li', 'answers-list-item');
    const radioInput = createElementWithClass('input', 'answer-check', 'visually-hidden')
    radioInput.type = 'radio';
    radioInput.name = `question-${questionId}`;
    radioInput.value = answerId;
    radioInput.id = `question-${questionId}-answer-${answerId}`;

    answersListItem.appendChild(radioInput);

    const labelInput = createElementWithClass('label', 'answer-check-label');
    labelInput.htmlFor = radioInput.id;
    labelInput.textContent = answerText;

    answersListItem.appendChild(labelInput);

    return answersListItem;
}

function createElementWithClass(tagName, ...cssClasses) {

    if (!tagName) return;
    if (typeof tagName != 'string') return;

    const tagElement = document.createElement(tagName);
    cssClasses.forEach(cl => tagElement.classList.add(cl));
    return tagElement;
}



console.log(quizdata);

console.log(createAnswerListItem(0, 0, "Rnj ns"));
