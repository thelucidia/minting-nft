import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useAccount } from 'wagmi';
import axiosConfig from '../services/axios-config';

const CodeAuth: React.FC = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [otp, setOtp] = useState('');

  const checkCode = async () => {
    try {
      console.log('otp: ', otp);
      const userEmail = localStorage.getItem('userEmail');
      const response = await axiosConfig.post('/user/verify-code', { code: otp, email: userEmail, wallet: address });
      console.log('response.data: ', response.data.msg);

      if (response.data.msg == 'Verification successful') {
        localStorage.setItem('isUser', new Date().toDateString());
        navigate('/join-us');
      } else {
        console.log('Some errors occur.');
      }
    } catch (error) {
      console.log('Error sending data to the server', error);
    }
  };

  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 md:p-10 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat md:max-w-screen-sm text-white">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Authentication code</p>
        <div className="mt-11 w-[343px] mx-auto">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className="w-[20px]">&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: '70px',
              height: '70px',
              background: 'transparent',
              outline: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: '2px solid #454545',
              fontSize: '48px',
              lineHeight: '59px',
              fontFamily: 'Clash Grotesk Variable',
              textAlign: 'center',
            }}
          />
        </div>
        <p className="text-lg font-semibold uppercase">
          Didn't get the code? <span className="text-[#0ED4FF] hover:cursor-pointer">Resend the code</span>
        </p>
        <button
          className="px-6 py-3 w-full max-w-80 rounded-xl font-bold font-secondary text-white bg-cyan"
          onClick={checkCode}
        >
          CONTINUE TO GENERATE
        </button>
      </div>
    </section>
  );
};

export default CodeAuth;
