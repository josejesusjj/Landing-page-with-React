import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const BodyDiv = () => {
	return (
		<div className="container">
			<Jumbotron />
			<div className="row row-cols-lg-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default BodyDiv;
