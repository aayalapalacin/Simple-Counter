import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div class="body">
			<div class="container-fluid">
				<div className="row">
					<div className="col-1 ">
						<i class="fas fa-clock"></i>{" "}
					</div>
					<div className="col-1 ">
						{Math.floor(props.number / 100000) % 10}
					</div>
					<div className="col-1">
						{Math.floor(props.number / 10000) % 10}
					</div>
					<div className="col-1">
						{Math.floor(props.number / 1000) % 10}
					</div>
					<div className="col-1">
						{Math.floor(props.number / 100) % 10}
					</div>
					<div className="col-1">
						{Math.floor(props.number / 10) % 10}
					</div>
					<div className="col-1">
						{Math.floor(props.number / 1) % 10}
					</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	number: PropTypes.number,
};
export default Home;
