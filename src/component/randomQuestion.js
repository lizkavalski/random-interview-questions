import React from 'react';
// import './style/style.scss';
import App from '../App.js';
// import question from './data.js';
const questions = [
  'How would you describe yourself in one word?',
  'Tell me one strength, and one weakness of yours?',
  'What can you offer us that someone else can not?',
  'What is the one thing your former manager would like you to improvw on?',
  'Tell me about an accomplishment you are most proud of.',
  'Give a time when you went above and beyond the requirements for a project.',
  'Tell me about a time that you disagree with a rule or approach.',
  'Tell me about a time you stepped up and lead with an idea you had?',
  'What kind of boss and coworkers have you had the most and least success with, and why?',
  'Can you give us a reason someone may noy like working with you?',
  'Tell me about a tetam project when you had to work with someone difficult.',
  'Why do you want to leave your current job?',
  'What do you like most about working in this industry?',
  'Do you usually make better decisions alone or with a group? Why? When do you ask for help?',
  'Tell me how you handled a diddicult situation.',
  'Tell me about a time you made a mistake.',
  'What would you look to accomplish in the first 30,60, or 90 days on the job?',
  'What do like the most and least about working in the industry?',
  'Where do you see yourself five to ten years?',
  'What is your dream job?',
  'Why are you looking a new job?',
  'Why do you want to work here?',
  'What motivates/gets you up in the morning?',
  'Tell me about your educational background.',
  'How did you heat about this position?',
  'What are your salary requirements?',
];

class RandomQuestion extends App{
constructor(){
  state=
}

  getRandomQuestion(){
    let question = questions[Math.floor(Math.random() * questions.length)];
    document.body.innerHTML = question
  }
  render(){
    return (
      <>
      <p>getRandomQuestion </p>
      </>
      );
  }
};


export default RandomQuestion;