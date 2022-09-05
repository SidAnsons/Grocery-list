import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={image} alt="shop" width="230px"/>
      </div>
      <div className='container'>
        <h1>Grocery list</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={imageTwo} alt="man" width="230px"/>
      </div>
    </div>
  );
}

export default App;
