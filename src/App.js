
import './App.css';
import {Routes,Route} from 'react-router-dom'
//import Products from './Product'
import Sproducts from './Sproduct'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path='/' element={<Products/>}></Route> */}
          <Route path='/' element={<Sproducts/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
