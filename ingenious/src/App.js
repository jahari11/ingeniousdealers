import React, {useState} from "react"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Services from "./pages/Services";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "./Components/Home Components/Navbar";
import Footer from "./Components/Footer";
import PasswordForm from "./Components/Password Component/PasswordForm";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import StorePage from "./pages/StorePage";


export default function App() {
    const location = useLocation();

    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePasswordSubmit = (enteredPassword) => {
        if (enteredPassword === 'ingeniousdealers') {
            setLoggedIn(true)
        } else {

        }
    };
    return (
        <div>
            <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element = {!loggedIn ? (<PasswordForm setPassword={handlePasswordSubmit} />) : (<Home />) } />
                <Route path="/home" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Home />}/>
                <Route path="/shop" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Shop />} />
                <Route path="/services" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Services />} />
                <Route path="/subscriptions" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Subscriptions />} />
                <Route path="/store/:storeId" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <StorePage />} />
            </Routes>
            </AnimatePresence>
        </div>
    )
}