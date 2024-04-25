import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import App from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/*" element={<App />}/>
        </Routes>
    </Router>
)