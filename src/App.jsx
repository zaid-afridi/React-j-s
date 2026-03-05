function App() {
  const fruit = (name) => {
    alert(name);
  };
  return (
    <>
      <div>
        <h1 className="bg-green-400 font-bold text-2xl">
          initionalized project
        </h1>
        <Fruit></Fruit>
        <Color />
      </div>
      <div>
        <h1>Event in funstio call</h1>
        <button onClick={() => fruit("apple")}>apple</button>
        <button onClick={() => fruit("banana")}>banana</button>
        <h1 className="bg-green-400 font-bold text-2xl">
          initionalized project
        </h1>
      </div>
    </>
  );
}

function Fruit() {
  return <h1 className="text-2xl bg-amber-200">Apple</h1>;
}
function Color() {
  return <h1 className="text-2xl bg-amber-900">red</h1>;
}
export default App;
