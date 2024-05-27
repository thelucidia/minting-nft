interface AvatarProps {
  name: string;
  img?: string;
  wallet: string;
  status: boolean;
}

const Avatar = (props: AvatarProps) => {
  const { name, img, wallet, status } = props;

  return (
    <div className="flex flex-row items-center justify-center gap-4 bg-[url('/minting/Vector-avatar.png')] bg-full bg-no-repeat text-white py-2 min-w-72 md:min-w-80 mx-auto">
      <img src={img || '/hero/Rectangle 213.png'} alt="character" />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-base font-medium">{wallet}</p>
      </div>
      <div className={`"border rounded-full ${status ? 'bg-green-500' : 'bg-red-600'} w-8 h-8 min-w-4"`} />
    </div>
  );
};

export default Avatar;
