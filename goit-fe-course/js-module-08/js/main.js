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


function getAnswers({ questions }) {
    return questions.map((question, index) => [`q${index}`, question.answer]);
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

    showModal(form);
}


function showModal(form) {
    const userAnswers = getFormValues(form);
    const quizAnswers = getAnswers(quizdata);
    const wrapper = document.querySelector('.wrapper');
    const testPercent = getTestResult(userAnswers, quizAnswers);
    const isPassed = getTestResult(userAnswers, quizAnswers) >= 80;
    const overlay = createOverlay(`Ваш результат: ${testPercent}%`, isPassed);
    overlay.addEventListener('click', handleOverlayClick);
    wrapper.prepend(overlay);
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

    const results = []
    formData.forEach((value, name) => results.push([name, value]))

    return results;
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
    radioInput.name = `q${questionId}`;
    radioInput.value = answerId;
    radioInput.id = `q${questionId}-a${answerId}`;

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

function createOverlay(innerTextContent, isPassed) {

    const overlayBlock = createElementWithClass('div', 'overlay');
    const resultBlock = createElementWithClass('div', 'test-results');
    const resultBlockText = createElementWithClass('p', 'test-results-content');

    if (!isPassed) {
        resultBlockText.classList.add('test-failed');
    }

    resultBlockText.textContent = innerTextContent;
    resultBlock.appendChild(resultBlockText);
    overlayBlock.appendChild(resultBlock);

    return overlayBlock;
}


const quizForm = createForm(quizdata);

function handleOverlayClick(event) {
    const overlay = event.currentTarget;
    overlay.remove();
}


function getTestResult(userAnswers, answers) {
    const result = [];
    for (const userAnswer of userAnswers) {
        for (const answer of answers) {
            if (userAnswer[0] == answer[0]) {
                result.push(userAnswer[1] == answer[1]);
            }
        }
    }

    const rightAnswers = result.filter(isEqual => isEqual).length;
    const percent = Math.round(rightAnswers * (100 / result.length));

    return percent;
}





