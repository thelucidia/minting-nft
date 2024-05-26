import React from 'react';

interface QuizProps {
  quiz: string;
  options: string[];
}

const Quiz: React.FC<QuizProps> = ({ quiz, options }) => {
  return (
    <section className="mt-4">
      <h6 className="font-second font-third font-semibold text-white text-[14px] leading-[24px] mt-1 mb-3">{quiz}</h6>
      <div>
        {options.map((option, idx) => (
          <div key={'item-' + idx} className="">
            <input
              id="inline-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-[#00EAEF] bg-gray-100 border-[#00EAEF] rounded focus:ring-blue-500 dark:focus:ring-[#00EAEF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="inline-checkbox" className="ms-2 text-[14px] font-medium text-white dark:text-gray-300">
              {option}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quiz;
