import React from 'react';
import "./index.css";
import siyu3 from "../img/siyu3.jpeg";
import maoist1 from "../img/maoist1.png";
import activism1 from "../img/activism1.png";

const Home = () => {
	return (
		<div className='index-wrap'>
			<h1>Untold LGBT Space in Beijing</h1>
			<h3>Making an invisible LGBT history visible</h3>
			<h4>The Beijing LGBT Historic Sites Project is a cultural diversity and inclusion project which will empower LGBT people by preserving LGBT history and placing that history in a geographical, social and cultural context. The project aims to document historic sites connected to Beijing’s LGBT community, giving life to its oft-untold history and influence on the public in China. </h4>
			<iframe src="https://www.google.com/maps/d/u/2/embed?mid=1KLCSGfIHWHc0_vwXDxbWIh3mbt5Mo_Y8&ehbc=2E312F" height="640" width="1280"></iframe>

			<div className='map-info-container'>
				<h4 className='map-info'> Our project is a work in progress. We are continuously documenting and adding sites that reflect the ethnic and geographic diversity of the LGBT community and date from the late Qing Dynstery in the 19th century to the year 2010.</h4>
			</div>

			<div>
				<h1>Curated Themes</h1>
			</div>
			
			<div className='eras'>
				<div className="era1">
					<p>Premodern China</p>
					<h5>19th century-1949</h5>
					<img className='era1' src={siyu3} alt="cover1" width="200" height="200" />
				</div>

				<div className="era2">
					<p>Maoist Era</p>
					<h5>1949-1976</h5>
					<img className='era2' src={maoist1} alt="cover2" width="200" height="200" />
				</div>
				<div className='era3'>
					<p>After Economic Reform</p>
					<h5>1980s-2010</h5>
					<img className='era3' src={activism1} alt="cover3" width="200" height="200" />
				</div>
				<button className='era1-button'>view</button>

				<button className='era1-button'>view</button>

				<button className='era1-button'>view</button>

				
			</div>
			<footer>
				<p>Author: Silvia Xu</p>
				<p><a href="sx0771@gmail.com">sx0771@gmail.com</a></p>
			</footer>
		</div>
	);
};

export default Home;
