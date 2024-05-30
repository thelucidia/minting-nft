import React from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../components/elements/Quiz';

const FinishAssessment: React.FC = () => {
  const questions = [
    {
      quiz: 'What can you use LUCID tokens for in Lucidia?',
      options: ['A) Buying in-game items', 'B) Buying groceries', 'C) Paying Taxes', 'D) Purchasing airline tickets'],
    },
    {
      quiz: 'What special services does Lucidia Offer to game developers',
      options: [
        'A) Car rental services',
        'B) NFT Marketplace Services',
        'C) Laundry Services',
        'D) Real estate services',
      ],
    },
    {
      quiz: "What makes Lucidia's login system special?",
      options: ['A) Free Wi-Fi access', 'B) Social media integration', 'C) Free coffee', 'D) Gym membership'],
    },
    {
      quiz: "What does Lucidia's scholarship program allow players to do?",
      options: ['A) Share game accounts', 'B) Exchange recipes', 'C) Trade gardening tips', 'D) Share workout plans'],
    },
  ];

  return (
    <section className="relative flex items-center justify-center w-full h-auto p-4 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 md:p-10 mt-32 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat w-full md:max-w-screen-sm">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">
          Last! Finish your assessment
        </p>
        <div className="mt-4 w-[300px] mx-auto text-left">
          {questions.map((question, idx) => (
            <Quiz quiz={question.quiz} options={question.options} key={'item-' + idx} />
          ))}
        </div>
        <Link to="/be-lucidian">
          <button className="rounded-[12px] bg-cyan hover:bg-white py-3 px-10 text-center bg-no-repeat bg-contain uppercase text-black w-full min-w-80">
            <h4 className="font-bold font-secondary">Confirm</h4>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FinishAssessment;
