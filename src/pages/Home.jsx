import React from "react";
import Map from "../components/Map";
import Table from "../components/Table";
function Home(){

	return(
		<div className="container-fluid">
			<div className="text-center p-3">
				<h1>Visor</h1>
			</div>
			<div className="row">
				<div className="col-lg-8">
					<Map />
				</div>
				<div className="col-lg-4">
					<Table />
				</div>
			</div>
		</div>
	)
}

export default Home