import Header from "./components/Header";
import { BoardProvider } from "./context/boardContext";
import Game from "./components/Game";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <Header />

        <BoardProvider>
          <Game />
        </BoardProvider>
      </div>
    </main>
  );
}

export default App;
