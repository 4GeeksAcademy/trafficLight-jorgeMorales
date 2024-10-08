import React from "react";
import TrafficLight from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
			<div className="mx-auto">
				<TrafficLight />
			</div>
	);
};

export default Home;
