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

const userAnswers = [];



function getAnswers({ questions }) {
    return questions.map((question, index) => [`question${index}`, `${question.answer}`]);
}

function createForm({ title, questions }) {
    const form = document.querySelector('form.questions-form')

    // never use btn for click sumit form!!!
    form.addEventListener('submit', handleSubmitForm);
    form.addEventListener('input', handleRadioCheck);

    const formTitle = createElementWithClass('h2', 'questions-form-title');
    formTitle.textContent = title;

    const questionsList = createElementWithClass('ul', 'questions-list');

    const listOfQuestions = questions.reduce((aggr, question, index) => {
        questionsList.appendChild(createQuestionElement(index, question.question, question.choices));
        return questionsList;
    }, questionsList);

    form.prepend(listOfQuestions);
    form.prepend(formTitle);

    return form;
}

function handleSubmitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // const nameInput = form.elements['question1'];
    // console.log(nameInput.value);
    // console.dir(form);



    // console.log(radioValues);

}

function handleRadioCheck(event) {
    const form = event.currentTarget;
    const userAnswers = getFormValues(form);
    const quizAnswers = getAnswers(quizdata);
    if (userAnswers.length != quizAnswers.length) {
        return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = false;
}

function getFormValues(form) {
    const formData = new FormData(form);
    const formInputValues = [...formData.entries()];
    return formInputValues;
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
    radioInput.name = `question${questionId}`;
    radioInput.value = answerId;
    radioInput.id = `question${questionId}-answer${answerId}`;

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

const quizForm = createForm(quizdata);




