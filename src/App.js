import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Dynamic from './pages/Dynamic'
import PageNotFound from './pages/PageNotFound'

function App() {
	return (
		<>
			<BrowserRouter basename={"/"}>
				<Navbar />
				<div id="content">
					<Switch>
						<Route exact path={"/"} component={Home} />
						<Route exact path={"/dynamic/:id"} component={Dynamic} />
						<Route path={"*"} component={PageNotFound} />
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
