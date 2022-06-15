import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Navbar from './Pages/Shared/Navbar';
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>

        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product/:id' element={<ProductInfo></ProductInfo>}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
