import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosConfig from '../services/axios-config';
import LucidiaToast from '../components/elements/LucidiaTost';

const VerifyEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendDataToServer = async () => {
    try {
      const response = await axiosConfig.post('/user/send-code', {
        email,
      });

      localStorage.setItem('userEmail', email);

      if (email === response.data.email) {
        navigate('/code-auth');
      } else {
        toast(<LucidiaToast message={response.data.msg} />);
      }
    } catch (error) {
      console.log('Error sending data to the server', error);
    }
  };

  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 md:p-10 text-white bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat md:max-w-screen-sm">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Verify your email</p>
        <div className="mt-11 w-full max-w-md mx-auto">
          <div className="h-11 clipped2 bg-gradient-to-r from-[#7700FF] to-[#FFFFFF] relative flex items-center scale-x-[-1]">
            <div className="absolute bg-black w-[99%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
            <input
              type="email"
              className="px-10 font-primary w-full relative z-10 text-[16px] scale-x-[-1] bg-transparent outline-none"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <p className="pt-8 text-lg font-semibold uppercase">
            You will receive a code for authentication on your email.
          </p>
        </div>
        <button
          className="px-6 py-3 w-full max-w-80 rounded-xl font-bold font-secondary text-white bg-cyan"
          onClick={sendDataToServer}
        >
          Send code
        </button>
      </div>
    </section>
  );
};

export default VerifyEmail;
