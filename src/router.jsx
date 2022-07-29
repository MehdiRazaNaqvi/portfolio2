
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./App.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/portfolio2/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )


}


export default App