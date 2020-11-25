import store from './store/store';
import { Provider } from 'react-redux';
import Book from './component/Book';
import HookBook from './component/HookBook';

function App() {
  return (
    <Provider store={store}>
        <Book/>
        <HookBook/>
    </Provider>
    
  );
}

export default App;
