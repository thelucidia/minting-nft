const LucidiaToast = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 p-4 text-base text-white bg-[url('/minting/alertVector.png')] bg-full min-w-72">
      {message}
    </div>
  );
};

export default LucidiaToast;
