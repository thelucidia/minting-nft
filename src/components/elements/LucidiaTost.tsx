const LucidiaToast = ({ message }: { message: string }) => {
    return <div className="flex items-center justify-center border-2 border-solid border-[#00ffff] rounded-lg text-base text-white px-[20px] py-[10px] bg-[#1a1a1a] min-w-52">
        {message}</div>
}

export default LucidiaToast;