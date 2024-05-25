import React from 'react';

interface BenefitProps {
  className?: string;
  style?: any;
  prefix: number;
  content: string;
}

const Benefit: React.FC<BenefitProps> = ({ className, style, prefix, content }) => {
  return (
    <div
      className={`${className || ''}relative flex items-center px-4 py-4 md:px-6 md:py-12 text-center border-t-4 border-b-4 border-solid border-[#F6F6F6] rounded-[74px] w-full sm:w-2/3 xd:max-w-80 min-h-72 xd:min-h-80`}
      style={style}
    >
      <h2
        className="absolute left-4 xd:-left-8 z-0 font-primary font-semibold text-14xl sm:text-16xl md:text-18xl leading-[36px]"
        style={{
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '1px rgba(246, 246, 246, 0.51)',
        }}
      >
        {prefix}
      </h2>
      <h5
        className="pl-16 font-semibold text-white text-primary text-2xl sm:text-3xl md:text-4xl text-start"
        style={{ letterSpacing: '1px' }}
      >
        {content}
      </h5>
    </div>
  );
};

export default Benefit;
