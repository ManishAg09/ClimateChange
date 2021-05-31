import React from 'react';
import Tilt from 'react-tilt'
import img1 from './Total_Emmission.png';
import img2 from './Avg_air_quality.png';
import img3 from './Gradual_Growth.png';
import img4 from './Growth_Activities.png';
import img5 from './Max_air_quality.png';
import img6 from './Min_air_quality.png';
import img7 from './Temp_distribution.png';
import img8 from './pollution1.png';
import img9 from './pollution2.png';
import img10 from './pollution3.png';
import './Home.css'


const Logo = () =>{
	return(
		<div class = 'container'>
			<div className = 'ma4 mt0' >
				<div className = 'heading'>
					<h1 className = 'f1 br2 shadow-2 black pa3 pointer center' style={{height: 100,width:600}}>Visualizations</h1>
				</div>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 650, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img1}/>
	 					<h2 className = 'underline heading'>Total Emission from all the Activities % throughout the Years</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 720, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img2}/>
	 					<h2 className = 'underline heading'>Average Air Quality Distribution</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 680, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img3}/>
	 					<h2 className = 'underline heading'>Which Activity Rate was highest in which Year and Which Activity started to grow in which Year</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 470, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img4}/>
	 					<h2 className = 'underline heading'>Gradual Growth of Activities</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 750, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img5}/>
	 					<h2 className = 'underline heading'>Maximum Air Quality Distribution</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 700, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img6}/>
	 					<h2 className = 'underline heading'>Minimum Air Quality Distribution</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 875, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img7}/>
	 					<h2 className = 'underline heading'>Temperature Distribution</h2>
	 				</div>
				</Tilt>
				<h1> </h1>
				<Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 55 }} style={{ height: 900, width: 600 }} >
	 				<div className="Tilt-inner pa3">
	 					<h2 className = 'underline heading'>Air Pollution Index</h2>
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img8}/>
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img9}/>
	 					<img style={{paddingTop: '10px', paddingBottom: '0px'}} alt='flag' src={img10}/>
	 				</div>
				</Tilt>
			</div>
		</div>
	);
}

export default Logo






