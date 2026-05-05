import GrandChild from "./GrandChild";

const Child = ({ name }) => {
  return (
    <div className="p-5 bg-green-100 mt-3">
      <h2 className="text-xl font-bold">Child Component</h2>

      {/* Passing again (even if not needed here) */}
      <GrandChild name={name} />
    </div>
  );
};

export default Child;