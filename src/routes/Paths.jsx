import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../pages/Login'
import Home from '../pages/Home'
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

const Paths = () => {
    const { isAuthenticated } = useContext(Context)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {
                    isAuthenticated && (
                        <Route path="home" element={<Home />} />
                    )
                }
            </Routes>
        </Router>
    );
}
 
export default Paths;