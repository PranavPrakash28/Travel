import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Domestic from "./Pages/Domestic.jsx";
import International from "./Pages/International.jsx";
import Contact from "./Pages/Contact.jsx";
import PolicyPrivacy from "./Pages/PolicyPrivacy.jsx";
import Loc_Bali from "./Destinations/Bali_Packages.jsx";
import Loc_Himachal from "./Destinations/Himachal_Packages.jsx";
import Loc_Jaipur from "./Destinations/Jaipur_Packages.jsx";
import Loc_Singapore from "./Destinations/Singapore_Packages.jsx";
import Booking_Form from "./Components/Booking_Form/Booking_Form.jsx";
import All_Cards from "./Components/All_Cards/All_Cards.jsx";
import Loc_Europe from "./Destinations/Europe_Packages.jsx";
import Loc_Agra from "./Destinations/Agra_Packages.jsx";
import Loc_Paris from "./Destinations/Paris_Packages.jsx";
import Loc_Kerala from "./Destinations/Kerala_Packages.jsx";
import Loc_Goa from "./Destinations/Goa_Packages.jsx";
import Loc_Tokyo from "./Destinations/Tokyo_Packages.jsx";
import Loc_Dubai from "./Destinations/Dubai_Packages.jsx";
import Loc_Maldives from "./Destinations/Maldives_Packages.jsx";
import Lost_User from "./Components/Advertise/Lost_User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "domestic",
        element: <Domestic />,
      },
      {
        path: "international",
        element: <International />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Bali_Packages",
        element: <Loc_Bali />,
      },
      {
        path: "Himachal_Packages",
        element: <Loc_Himachal />,
      },
      {
        path: "Singapore_Packages",
        element: <Loc_Singapore />,
      },
      {
        path: "Europe_Packages",
        element: <Loc_Europe />,
      },
      {
        path: "Booking_Form",
        element: <Booking_Form />,
      },
      {
        path: "All_Cards",
        element: <All_Cards />,
      },
      {
        path: "privacy",
        element: <PolicyPrivacy />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "Jaipur_Packages",
        element: <Loc_Jaipur />,
      },
      {
        path: "Tokyo_Packages",
        element: <Loc_Tokyo />,
      },
      {
        path: "Kerala_Packages",
        element: <Loc_Kerala />,
      },
      {
        path: "Goa_Packages",
        element: <Loc_Goa />,
      },
      {
        path: "Agra_Packages",
        element: <Loc_Agra />,
      },
      {
        path: "Paris_Packages",
        element: <Loc_Paris />,
      },
      {
        path: "Dubai_Packages",
        element: <Loc_Dubai />,
      },
      {
        path: "Maldives_Packages",
        element: <Loc_Maldives />,
      },
      {
        path: "Lost_user",
        element: <Lost_User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
