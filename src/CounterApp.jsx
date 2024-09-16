import { useState } from "react"

function CounterApp() {
	const [value, setValue] = useState(0)
	const handleAdd = (number) => {
		setValue(value + number)
	}
	const handleSubtract = (number) => {
		setValue(value + number)
	}
	const handleReset = () => {
		setValue(0)
	}
	return (
		<div className="container">
			<h1>Counter App</h1>
			<h2>{value < 0 ? alert("Negative numbers are not allowed") : value}</h2>
			<div>
				<button onClick={() => handleAdd(-1)}> -1 </button>
				<button onClick={() => handleSubtract(1)}> +1 </button>
				<div className="containerButtonReset">
					<button onClick={handleReset}> Reset </button>
				</div>
			</div>
		</div>
	)
}

export default CounterApp
