import React, {ReactNode} from "react";

interface MediaStatusProps {
    icon: ReactNode,
    status: string,
    checkedStatus: string
};

const MediaStatus: React.FC<MediaStatusProps> = ({icon, status, checkedStatus}) => {
    return (
        <div className="flex items-center mt-2">
            <div className="w-[50px] hover:transition-all ease-in-out duration-300 hover:text-cyan text-[42px]">
                {icon}
            </div>
            <div className="ml-3 w-[140px]">
                <h4 className="text-[#F6F6F6] text-primary font-medium text-[16px] leading-[24px]">{status}</h4>
            </div>
            <div className="ml-6">
                <input id="inline-checkbox" checked type="checkbox" value="" className="w-4 h-4 mt-3 text-[#00EAEF] bg-gray-100 border-[#00EAEF] rounded focus:ring-blue-500 dark:focus:ring-[#00EAEF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-checkbox" className="ms-2 text-[12px] leading-[18px] font-medium text-gray-900 dark:text-gray-300">
                    {checkedStatus}
                </label>
            </div>
        </div>
    );
};

export default MediaStatus;