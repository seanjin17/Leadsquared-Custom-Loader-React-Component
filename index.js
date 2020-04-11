import React from 'react'
import './LsqLogo.css'
export default function LsqLogo(props) {
	return (
		<>
			<div className={`LsqLogoRoot ${props.animated ? "animated" : ""}`}>
				<div className='LsqLogoMainDiv'>
					<div className="black"></div>
					<div className="white"></div>
					<div className="blue"></div>
				</div>
			</div>
			{!props.dontShowLogoName
				? <div className={`LogoName`}>
					<h2>lead<span className='squared'>squared</span></h2>
				</div>
				: ""}
		</>
	)
}