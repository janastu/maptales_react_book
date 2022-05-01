import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Cover() {
	const cover = window.cover;
	return (
		<div className="cover">
			<h1>{cover.title}</h1>
			<h2>{cover.subTitle}</h2>
			<h3>{cover.author}</h3>
			<Link to='0' >
			 Start
			</Link>
		</div>
	);
}

export default Cover;
