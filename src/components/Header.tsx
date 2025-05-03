import { memo } from "react";
import { Gamepad2 } from "lucide-react";

function Header() {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <Gamepad2 className="text-pink h-8 w-8" />
      <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
    </div>
  );
}

export default memo(Header);
