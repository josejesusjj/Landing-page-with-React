import React from "react";

const Card = () => {
	return (
		<div className="container text-center my-3 col-sm">
			<div className="card text-center">
				<div className="card-body">
					<img
						src="https://picsum.photos/210/150"
						classname="col card-img-top img-fluid"
						alt="an image"
					/>
					<h5 className="card-title p-3">Card title</h5>
					<p className="card-text">
						With supporting text below as a natural lead-in to
						additional content.
					</p>
				</div>
				<div className="card-footer text-muted">
					{" "}
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
