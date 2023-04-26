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

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => { 
		document.title = t('appTitle'); 
	}, []);
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
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
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;