import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen.jsx';
import ProductScreen from './pages/ProductScreen.jsx';
import { Provider } from 'react-redux';
import store from '../store.js';
import CartScreen from "../src/pages/CartScreen.jsx"






const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={Router}>
    <App />
    </RouterProvider>
    </Provider>
  
)
