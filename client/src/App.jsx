import React, {useEffect} from "react";
import './app.scss';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from './pages/mygigs/MyGigs';
import Adding from "./pages/adding/Adding";
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Success from "./pages/success/Success";

import {QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Payment from "./pages/payment/Payment";

function App() {
    const { t, i18n } = useTranslation();
    const queryClient = new QueryClient();
    useEffect(() => { 
        document.title = t('appTitle'); 
    }, []);
    const Layout = () => {
        
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <NavBar />
                <Outlet />
                <Footer />
            </QueryClientProvider>
        </div>
    );
}

const router = createBrowserRouter([
    {
    path: '/', element: <Layout />, children: [
        {
          path: '/', element: <Home />
        },
        {
          path: '/gigs', element: <Gigs />
        },
        {
          path: '/gig/:id', element: <Gig />
        },
        {
          path: '/orders', element: <Orders />
        },
        {
          path: '/mygigs', element: <MyGigs />
        },
        {
          path: '/add', element: <Adding />
        },
        {
          path: '/messages', element: <Messages />
        },
        {
          path: '/message/:id', element: <Message />
        },
        {
          path: '/login/', element: <Login />
        },
        {
          path: '/register', element: <Register />
        },
        {
          path: '/payment', element: <Payment />
        }, 
        {
          path: '/success', element: <Success />
        },
      ]
    }
  ]);

  return (
        <>
        <RouterProvider router={router} />
        </>
    );
}

export default App;