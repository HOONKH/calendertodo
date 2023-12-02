import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto bg-black text-white ">
      <h1 className="text-5xl text-center">2023.12</h1>
      <div className="min-h-screen bg-white pt-10">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
