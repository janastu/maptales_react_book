import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cover() {
	const [coverData, setCover] = useState({});

	useEffect(()=>{
	    getCoverData()
	  },{});

	// Fetch data
	const getCoverData = () => {
	  fetch("cover.json").then((coverFile) => {
	      return coverFile.json();
	  }).then((response) => {
	      setCover(response);
	  });
	}

	return (
		<div className="cover">
			<h1>{coverData.title}</h1>
			<h2>{coverData.subTitle}</h2>
			<h3>{coverData.author}</h3>
			<Link to='/0' >
			 Start
			</Link>
		</div>
	);
}

export default Cover;