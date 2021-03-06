import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CharacterCard } from "/src/js/component/characterCard.js";
import { PlanetCard } from "/src/js/component/planetCard.js";
import { VehicleCard } from "/src/js/component/vehiclesCard.js";
import { Context } from "/src/js/store/appContext.js";

import "/src/styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" style={{margin: "25px", padding: "10px" }}>
			<h1 className="d-flex float-left">Characters</h1>
			<div className="character d-flex overflow-auto">
				{store.character.map((character, index) => {
					return <CharacterCard character={character} key={index} index={index} />;
				})}
			</div>
			<br />
			<br />
			<h1 className="d-flex float-left">Planets</h1>
			<div className="planet d-flex overflow-auto">
				{store.planet.map((planet, index) => {
					return <PlanetCard planet={planet} key={index} index={index} />;
				})}
			</div>
			<br />
			<br />
			<h1 className="d-flex float-left">Vehicles</h1>
			<div className="vehicle d-flex overflow-auto">
				{store.vehicle.map((vehicle, index) => {
					return <VehicleCard vehicle={vehicle} key={index} index={index} />;
				})}
			</div>
			<br />
		</div>
	);
};