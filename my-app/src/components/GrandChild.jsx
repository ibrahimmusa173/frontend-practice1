const GrandChild = ({ name }) => {
  return (
    <div className="p-5 bg-yellow-100 mt-3">
      <h2 className="text-xl font-bold">GrandChild Component</h2>

      <p className="text-lg mt-2">Hello, {name} 👋</p>
    </div>
  );
};

export default GrandChild;