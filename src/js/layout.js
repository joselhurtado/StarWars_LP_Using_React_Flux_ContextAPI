import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "/src/js/component/scrollToTop.js";

import { Home } from "/src/js/views/home.js";
import { Demo } from "/src/js/views/demo.js";
import { Single } from "/src/js/views/single.js";
import { singleCharacterView } from "/src/js/views/singleCharacter.js";
import injectContext from "/src/js/store/appContext.js";

import { Navbar } from "/src/js/component/navbar.js";
import { Footer } from "/src/js/component/footer.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/singleCharacter/:theid" component={singleCharacterView} />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);