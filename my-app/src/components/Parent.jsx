import Child from "./Child";

const Parent = () => {
  return (
    <div className="p-5 bg-blue-100">
      <h2 className="text-xl font-bold">Parent (Clean)</h2>
      <Child /> 
    </div>
  );
};
export default Parent;