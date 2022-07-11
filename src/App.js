import { Provider } from 'react-redux';
import GlobalStyle from './styles/globalStyles';
import {AppRouter} from './routes/AppRouter';
import { store } from './store'

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
