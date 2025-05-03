import { RotateCcw } from "lucide-react";
import { memo } from "react";

type RestartBoxProps = {
  onRestart: () => void;
};

function RestartBox({ onRestart }: RestartBoxProps) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        className="group bg-pink flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white hover:opacity-90"
        onClick={onRestart}
      >
        Restart game{" "}
        <RotateCcw className="transition-transform duration-500 group-hover:-rotate-360" />
      </button>
    </div>
  );
}

export default memo(RestartBox);
