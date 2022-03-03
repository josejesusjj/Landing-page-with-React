import React from "react";
import Navbar from "./navbar.jsx";
import BodyDiv from "./body.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<BodyDiv />
			<Footer />
		</div>
	);
};

export default Home;
