import React, {useState} from "react"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Services from "./pages/Services";
import PasswordForm from "./Components/Password Component/PasswordForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePasswordSubmit = (enteredPassword) => {
        if (enteredPassword === 'ingeniousdealers') {
            setLoggedIn(true)
        } else {

        }
    };
    return (
        <div className="container">
            <BrowserRouter>
            <Routes>
                <Route index element = {!loggedIn ? (<PasswordForm setPassword={handlePasswordSubmit} />) : (<Home />) } />
                <Route path="/home" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Home />}/>
                <Route path="/shop" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Shop />} />
                <Route path="/services" element={!loggedIn ? <PasswordForm setPassword={handlePasswordSubmit} /> : <Services />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}