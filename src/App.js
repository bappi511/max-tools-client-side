import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        </Routes>
        <Footer></Footer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
