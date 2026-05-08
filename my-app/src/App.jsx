import Parent from "./components/Parent";
import { Provider } from 'react-redux'; // Only if you set up Redux
import { store } from './store';        // Only if you set up Redux

function App() {
  return (
    <Provider store={store}>
      <div className="p-5">
        <Parent />
      </div>
    </Provider>
  );
}

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default App;