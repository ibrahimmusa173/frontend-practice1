import Parent from "./components/Parent";

function App() {
  const userName = "Kiran";

  return (
    <div className="p-5">
      <Parent name={userName} />
    </div>
  );
}

export default App;