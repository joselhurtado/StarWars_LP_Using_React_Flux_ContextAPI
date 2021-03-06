import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import characterSw from "/src/img/Characters_SW.jpeg";

//characterCards
export function CharacterCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img className="card-img-top" src={characterSw} alt="Card image cap" width="100px" height="auto" />

			{props.character.name ? (
				<div className="card-body justify-content-between">
					<h5 className="card-title">{props.character.name}</h5>
					<p className="card-text">
						<strong>Hair Color:</strong> {""}
						{props.character.hair_color} <br />
						<strong>Height:</strong> {""}
						{props.character.height} <br />
						<strong>Birth Year:</strong> {""}
						{props.character.birth_year} <br />
						<strong>Skin Color:</strong> {""}
						{props.character.skin_color} <br />
						<strong>Eye Color:</strong> {""}
						{props.character.eye_color} <br />
						<strong>Gender:</strong> {""}
						{props.character.gender} <br />
					</p>

				<div className="d-flex justify-content-between">
					<Link to={"/single/" + props.index} id="bottom" className="btn btn-warning ">
						Learn More
					</Link>
					<a href="#" className="btn btn-outline-warning fa fa-heart" />
				</div>

				</div>
			) : (
				"DATA LOADING..."
			)}
		</div>
	);
}

CharacterCard.propTypes = {
	character: PropTypes.object
};

CharacterCard.propTypes = {
	index: PropTypes.number
};