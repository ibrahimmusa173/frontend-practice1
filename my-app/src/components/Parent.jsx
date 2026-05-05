import Child from "./Child";

const Parent = ({ name }) => {
  return (
    <div className="p-5 bg-blue-100">
      <h2 className="text-xl font-bold">Parent Component</h2>

      {/* Passing prop down */}
      <Child name={name} />
    </div>
  );
};

export default Parent;