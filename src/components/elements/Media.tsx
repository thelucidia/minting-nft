import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LucidiaToast from "./LucidiaTost";

interface Iitem {
  link: string,
  icon: ReactNode
};

interface MediaProps {
  item: Iitem,
  title: string,
  content: string,
  inputPlaceholder: string,
  buttonValue: string,
  check: (username: string) => Promise<boolean>
};

const Media: React.FC<MediaProps> = ({ item, title, content, inputPlaceholder, buttonValue, check }) => {
  const [joined, setJoined] = useState(false);
  const [username, setUsername] = useState('');
  const checkBtnClickHandler = async () => {
    if (!username) {
      toast(<LucidiaToast message="username should be required!" />);
      return;
    }
    const status = await check(username);
    if (!status) {
      toast(<LucidiaToast message="You are not a member of our community!" />);
    }
    setJoined(status);
  }

  return (
    <section className="w-[300px]">
      <div className="flex justify-center h-[70px]">
        <div className="w-[70px] hover:transition-all ease-in-out duration-300 hover:text-cyan text-[42px]">
          {item.icon}
        </div>
        <div className="text-left w-[230px]">
          <h3>{title}</h3>
          <h5 className="text-[12px] mt-2">{content}</h5>
        </div>
      </div>
      <div>
        <div className="flex border border-solid border-[#0ED4FF] w-full mx-auto mt-2 rounded-[10px] mb-3">
          <input className="border-0 outline-none font-semibold w-full text-[12px] py-[10px] px-2 bg-transparent font-secondary text-white" placeholder={inputPlaceholder} value={username} onChange={(e) => setUsername(e.target.value)} />
          <button className="text-center px-4 bg-[#0ED4FF] rounded-[8px]" onClick={checkBtnClickHandler}>Check</button>
        </div>
        {joined ? <span>JOINED</span> : <Link to={item.link}>
          <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] w-full text-center bg-no-repeat bg-contain uppercase text-black text-[12px]">{buttonValue}</button>
        </Link>}
      </div>
    </section>
  );
};

export default Media;