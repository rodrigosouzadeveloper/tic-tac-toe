type GameStatusProps = {
  status: string;
};

function GameStatus({ status }: GameStatusProps) {
  return (
    <div className="mb-6 text-center">
      <p className="text-xl font-semibold text-gray-100">{status}</p>
    </div>
  );
}

export default GameStatus;
