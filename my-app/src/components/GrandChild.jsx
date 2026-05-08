import { useSelector, useDispatch } from 'react-redux';
import { updateName } from '../features/userSlice';

const GrandChild = () => {
  // 1. Get the name from store
  const name = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  return (
    <div className="p-5 bg-yellow-100 mt-3">
      <h2 className="text-xl font-bold">GrandChild (Redux)</h2>
      <p className="text-lg">Current User: {name}</p>
      
      {/* 2. Change the name globally */}
      <button 
        onClick={() => dispatch(updateName("Kiran Kumar"))}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Update Name
      </button>
    </div>
  );
};

export default GrandChild;