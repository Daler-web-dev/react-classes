import { useMemo, useState } from "react";
import "./App.scss";

function slooowFuntion(num) {
	for(let i = 0; i <= 1000000000; i++) {}
	return num * 2
}

function App() {
	const [number, setNumber] = useState(0);	
	const [dark, setDark] = useState(false);	
	const doubledNumber = useMemo(() => {
		return slooowFuntion(number), [number]
	}, [number])

	const themeStyle = {
		backgroundColor: dark ? "black" : "white",
		color: dark ? "white" : "black",
	}

	return (
		<div className="App">
			<input type="number" onChange={(e) => setNumber(e.target.value)} /> <br />
			<button onClick={() => setDark(!dark)} >change theme</button>
			<div style={themeStyle} >{doubledNumber}</div>
		</div>	
	);
}

export default App;
