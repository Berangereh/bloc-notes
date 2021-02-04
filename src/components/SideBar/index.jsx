import React from 'react';

const SideBar = ({savedTitle}) => {

	return (
		<aside className="col-2 p-0 bg-dark" style={{width: 200}}>
			<nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
				<div className="collapse navbar-collapse">
                    
					<ul className="flex-md-column flex-row navbar-nav w-100 justify-content-center">
						<li className="h2">Mes notes</li>
						<li style={{"color": "white"}}>
						{savedTitle}	
	                    </li>
					</ul>
				</div>
			</nav>
		</aside>
	);
}

export default SideBar;