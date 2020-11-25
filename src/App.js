import store from './store/store';
import { Provider } from 'react-redux';
import Book from './component/Book';

function App() {
  return (
    <Provider store={store}>
        <Book/>
    </Provider>
    
  );
}

export default App;
