import React from 'react'
import navLogo from "../../images/logo.svg"
import './navbar.scss';
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

	let navigate = useNavigate();


  return (
    <div class = "navigation">
			<div class = "container-fluid">
				<div class = "navContainer">
					<div class = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center navLogo">
						<div class = "logo">
							<a href = "index.html"><img src = {navLogo}/></a>
						</div>
					</div>

					<div class = "navLinks">
						<div class = "primary-nav">
							<ul >
								<li><a href='' onClick={() => navigate('/')}>Home</a></li>
								<li><a href='' onClick={() => navigate('/portfolio')}>Portfolio</a></li>
								<li><a href="" onClick={() => navigate('/contact')}>Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
