import { AppProvider } from '../state/context';
import NavBar from './navigation/NavBar';
import ProductPage from './pages/ProductPage';
import './App.css';
import { exampleItems } from 'shared/exampleItems';
const App = () => {
  return (
    <AppProvider>
      <NavBar />
      <ProductPage item={exampleItems[0]} />
    </AppProvider>
  );
};

export default App;
