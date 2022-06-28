import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts';
import Login from './Pages/Authentications/Login/Login';
import Register from './Pages/Authentications/Register/Register';
import RequireAdmin from './Pages/Authentications/RequireAdmin';
import RequireAuth from './Pages/Authentications/RequireAuth';
import AddProduct from './Pages/Dashboard/AddProduct';
import AdminUser from './Pages/Dashboard/AdminUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>

            <Route path='login' element={<Login></Login>}></Route>

            <Route path='register' element={<Register></Register>}></Route>

            <Route
              path="purchase/:_id" element={
                <RequireAuth>
                  <Purchase></Purchase>
                </RequireAuth>
              }>
            </Route>

            <Route
              path="products"
              element={<AllProducts></AllProducts>}
            ></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}>
              <Route
                index
                element={
                  <h2 className="text-2xl">
                    Welcome to the dashboard
                  </h2>
                }
              ></Route>
              <Route
                path="my-orders"
                element={<MyOrders></MyOrders>}
              ></Route>
              <Route
                path="add-product"
                element={
                  <AddProduct></AddProduct>
                }
              ></Route>
              <Route
                path="manage-all-products"
                element={
                  <RequireAdmin>
                    <ManageProducts></ManageProducts>
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="admin-user"
                element={
                  <AdminUser></AdminUser>
                }
              ></Route>
            </Route>
          </Routes>
          <Footer></Footer>
        </Navbar>
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{ duration: 4000 }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
