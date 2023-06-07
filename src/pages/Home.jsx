import React from "react";
import Map from "../components/Map";
import Table from "../components/Table";
function Home(){

	return(
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10">
					<div className="box-visor">
						<Map />
					</div>
				</div>
				<div className="col-lg-2">
					<div className="box-table py-2">
						<Table />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home