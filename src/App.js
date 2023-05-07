import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Success from "./pages/Success";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/userData/:email' element={<Home />} /> 
               <Route path="/success" element={<Success/>}/>
				<Route path='/' element={<Auth />} />
			</Routes>
		</div>
	); 
}

export default App;
