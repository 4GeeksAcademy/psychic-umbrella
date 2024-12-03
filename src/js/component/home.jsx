import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="Container">
			<h1>My Neobrustalistic Todo List</h1>
			<ul>
				<li>
					<input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyUp={(e) => {if (e.key === "Enter"){ setTodos(todos.concat([inputValue])); setInputValue("")}}} placeholder="What do you want now!?"></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item} {" "} <i className="fa-solid fa-trash-can" onClick={() => setTodos(todos.filter((_, currentIndex) => currentIndex !== index))} />

						
					</li>

				))}
			</ul>
		</div>
	);
};

export default Home;
