import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts';
import Login from './Pages/Authentications/Login/Login';
import Register from './Pages/Authentications/Register/Register';
import RequireAdmin from './Pages/Authentications/RequireAdmin';
import RequireAuth from './Pages/Authentications/RequireAuth';
import Blogs from './Pages/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AdminUser from './Pages/Dashboard/AdminUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import UserProfile from './Pages/Dashboard/UserProfileUpdate/UserProfile';
import Home from './Pages/Home/Home';
import Payment from './Pages/Payment/Payment';
import PaymentSuccess from './Pages/Payment/PaymentSuccess';
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
            <Route path='blogs' element={<Blogs></Blogs>}></Route>

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
            <Route
              path="payment/:id"
              element={
                <RequireAuth>
                  <Payment></Payment>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="payment-success/:tId"
              element={
                <RequireAuth>
                  <PaymentSuccess></PaymentSuccess>
                </RequireAuth>
              }
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
                path="add-review"
                element={<AddReview></AddReview>}
              ></Route>
              <Route
                path="user-profile"
                element={<UserProfile></UserProfile>}
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
                path="manage-all-orders"
                element={
                  <RequireAdmin>
                    <ManageAllOrders></ManageAllOrders>
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
          position="top-right"
          reverseOrder={true}
          toastOptions={{ duration: 4000 }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
