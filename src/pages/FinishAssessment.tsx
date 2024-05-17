import React from "react";
import { Link } from "react-router-dom";

import Quiz from "../components/elements/Quiz";

const FinishAssessment: React.FC = () => {

    const questions = [
        {
            quiz: "What can you use LUCID tokens for in Lucidia?",
            options: [
                "A) Buying in-game items",
                "B) Buying groceries",
                "C) Paying Taxes",
                "D) Purchasing airline tickets"
            ]
        },
        {
            quiz: "What special services does Lucidia Offer to game developers",
            options: [
                "A) Car rental services",
                "B) NFT Marketplace Services",
                "C) Laundry Services",
                "D) Real estate services"
            ]
        },
        {
            quiz: "What makes Lucidia's login system special?",
            options: [
                "A) Free Wi-Fi access",
                "B) Social media integration",
                "C) Free coffee",
                "D) Gym membership"
            ]
        },
        {
            quiz: "What does Lucidia's scholarship program allow players to do?",
            options: [
                "A) Share game accounts",
                "B) Exchange recipes",
                "C) Trade gardening tips",
                "D) Share workout plans"
            ]
        }
    ];

    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/token/Vector.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container max-w-[700px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                    <div>
                        <img
                            src="/token/Frame 24787 (1).png"
                            alt="borderBoxing"
                            className="w-full h-[960px]"
                        />
                        <div className="w-full absolute top-0 font-secondary font-semibold py-[60px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                            <h1 className="font-primary font-third text-white leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 32}}>
                                Last! Finish your assessment
                            </h1>
                            <div className="mt-4 w-[300px] mx-auto text-left">
                                {
                                    questions.map((question, idx) => (
                                        <Quiz quiz={question.quiz} options={question.options} key={"item-" + idx} />
                                    ))
                                }
                            </div>
                            <div className="mt-[30px]">
                                <Link to="/be-lucidian">
                                    <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[140px] text-center bg-no-repeat bg-contain uppercase text-black">
                                        <h4 className="font-bold font-secondary">Confirm</h4>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    );
};

export default FinishAssessment;