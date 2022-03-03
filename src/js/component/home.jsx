import React from "react";
import Navbar from "./navbar.jsx";
import BodyDiv from "./body.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<BodyDiv />
		</div>
	);
};

export default Home;
