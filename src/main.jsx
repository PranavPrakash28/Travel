import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Domestic from './Pages/Domestic.jsx'; 
import International from './Pages/International.jsx';      
import Contact from './Pages/Contact.jsx'; 
import PolicyPrivacy from './Pages/PolicyPrivacy.jsx';
import Loc_Bali from './Destinations/Loc_Bali.jsx'
import Loc_Himachal from './Destinations/Loc_Himachal.jsx';
import Loc_Jaipur from './Destinations/Loc_Jaipur.jsx';
import Loc_Thailand from './Destinations/Loc_Thailand.jsx';
import Booking_Form from './Components/Booking_Form/Booking_Form.jsx';
import All_Cards from './Components/All_Cards/All_Cards.jsx';
import Loc_Europe from './Destinations/Loc_Europe.jsx';
import Loc_Agra from './Destinations/Loc_Agra.jsx';
import Loc_Paris from './Destinations/Loc_Paris.jsx';
import Loc_Kerala from './Destinations/Loc_Kerala.jsx';
import Loc_Goa from './Destinations/Loc_Goa.jsx';
import Loc_Tokyo from './Destinations/Loc_Tokyo.jsx';
import Loc_Dubai from './Destinations/Loc_Dubai.jsx';
import Loc_Maldives from './Destinations/Loc_Maldives.jsx';
import Lost_User from './Components/Advertise/Lost_User.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', 
        element: <Home /> 
      },
      {
        path: 'about',
        element: <About />
      },
      { 
        path: 'domestic', 
        element: <Domestic /> 
      },     
      {
        path: 'international',
        element: <International /> 
      },         
      {
        path: 'contact', 
        element: <Contact /> 
      },  
      {
        path: 'Loc_Bali',   
        element: <Loc_Bali />
      },
      {
        path: 'Loc_Himachal',   
        element: <Loc_Himachal />
      },
      {
        path: 'Loc_Thailand',   
        element: <Loc_Thailand />
      },
      {
        path: 'Loc_Europe',   
        element: <Loc_Europe />
      },
      {
        path: 'Booking_Form',
        element: <Booking_Form />
      },
      {
        path:'All_Cards',
        element:<All_Cards/>
      },
      {
        path:'privacy',
        element:<PolicyPrivacy/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'Loc_Jaipur',
        element:<Loc_Jaipur/>
      },
      {
        path:'Loc_Tokyo',
        element:<Loc_Tokyo/>
      },
      {
        path:'Loc_Kerala',
        element:<Loc_Kerala/>
      },
      {
        path:'Loc_Goa',
        element:<Loc_Goa/>
      },
      {
        path:'Loc_Agra',
        element:<Loc_Agra/>
      },
      {
        path:'Loc_Paris',
        element:<Loc_Paris/>
      },
      {
        path:'Loc_Dubai',
        element:<Loc_Dubai/>
      },
      {
        path:'Loc_Maldives',
        element:<Loc_Maldives/>
      },
      {
        path: 'Lost_user',
        element: <Lost_User />
      }  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
