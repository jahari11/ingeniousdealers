import React, {useState, useEffect} from "react"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Services from "./pages/Services";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "./Components/Home Components/Navbar";
import Footer from "./Components/Footer";
import PasswordForm from "./Components/Password Component/PasswordForm";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import StorePage from "./pages/StorePage";
import Register from "./pages/Register";
import About from "./pages/About";
import IngeniousStore from "./pages/IngeniousStore";
import IgStoreId from "./pages/IgStoreId";
import ServiceId from "./pages/ServiceId";
import TopPicksId from "./pages/TopPicksId";


export default function App() {
    const location = useLocation();

    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // Check localStorage on component mount
    useEffect(() => {
        const savedLoginState = localStorage.getItem('ingeniousLoggedIn');
        if (savedLoginState === 'true') {
            setLoggedIn(true);
        }
    }, []);

    const handlePasswordSubmit = (enteredPassword) => {
        if (enteredPassword === 'ingeniousdealers518') {
            setLoggedIn(true);
            // Save login state to localStorage
            localStorage.setItem('ingeniousLoggedIn', 'true');
        } else {

        }
    };

    // Function to handle logout (optional - you can add this later)
    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('ingeniousLoggedIn');
    };
    return (
        <div>
            <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element = {!loggedIn ? (<PasswordForm setPassword={handlePasswordSubmit} />) : (<Home />) } />
                <Route path="/home" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Home />}/>
                <Route path="/local-dealers" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Shop />} />
                <Route path="/services" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Services />} />
                <Route path="/subscriptions" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Subscriptions />} />
                <Route path="/store/:storeId" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <StorePage />} />
                <Route path="/login" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Login />} />
                <Route path="/register" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Register />} />
                <Route path="/about" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <About />} />
                <Route path="/ingenious-shop" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <IngeniousStore />} />
                <Route path="/ingenious-store/:id" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <IgStoreId />} />
                <Route path="/service/:id" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <ServiceId />} />
                <Route path="/local-dealers/:id" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <TopPicksId />} />
            </Routes>
            </AnimatePresence>
        </div>
    )
}