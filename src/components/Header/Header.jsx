import React from 'react'
import "./header.scss"
import passionLogo from "../../images/passion.svg"
import devLogo from "../../images/developerdesign.svg"
import innovativeLogo from "../../images/innovativesolutions.svg"
import resDesLogo from "../../images/responsivedesign.svg"

export default function Header() {
  return ( 
    <div className='headerContainer'>    

      <div class = "main">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "entry-banner text-center">
						<h1 id = "hello">Hello, I'm</h1>
						<h1 id = "name">XXXX</h1>
						<h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
					</div>
				</div>

				<div class = "row text-center">
					<div class = "banner-buttons">
						<div class = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
							<a class = "btn btn-default btn-border whiteButton" href = "#about">Info</a>
						</div>

						<div class = "col-sm-1 col-md-1">
							<a class = "btn btn-default btn-border whiteButton" href = "#projects">Portfolio</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class = "about" id="about">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "about-header">
							<h1>About Me</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "about-header-quote">
							<h3>Sharing a little bit of my story...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "about-general-description ">
						<div class = "col-sm-8 col-md-8 ">
							<h2>General Overview</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "statistic-row">
					<div class = "about-statistic-description">
						<div class = "col-sm-8 col-md-8">
							<h2>Statistics</h2>
							<h5><em>And for those that don't fancy reading:</em></h5>
							<br></br>

							<p>Male, 200 years old.</p>
							<p>Five feet 110 inches</p>
							<p>Favorite fonts:Roboto </p>
							<p>Loves to learn new things</p>
	
						</div>
					</div>
					</div>
				</div>

				<div class = "row">
					<div class = "about-option-buttons">
						<div class = "col-sm-2 col-md-2">
							<a href = "#contact" class = "btn btn-default btn-black-border">Contact</a>
						</div>
					</div>
				</div>

		
			</div>
		</div>

		<div class = "summary summary-wrap">
			<div class = "container-fluid summary-container">
					<div class = "development-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "development-img">
								<img class = "img-responsive" src = {devLogo}/>
							</div>
						</div>

						<div class = "">
							<div class = "development-description">
								<h3>Development and Design</h3>
								<p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
							</div>
						</div>
					</div>

					<div class = "responsive-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<div class = "responsive-img">
								<img class = "img-responsive" src = {resDesLogo}/>
							</div>
						</div>

						<div class = "">
							<div class = "responsive-description">
								<h3>Responsive Layouts</h3>
								<p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
							</div>
						</div>
					</div>
				

					<div class = "ideas-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "idea-img">
								<img class = "img-responsive" src = {innovativeLogo}/>
							</div>
						</div>

						<div class = "">
							<div class = "idea-description">
								<h3>Ideas and Solutions</h3>
								<p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
							</div>
						</div>
					</div>

					<div class = "passion-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<img class = "img-responsive" src = {passionLogo}/>
						</div>

						<div class = "">
							<div class = "passion-description">
								<h3>Passion and Dedication</h3>
								<p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
							</div>
						</div>
					</div>
				
			</div>
		</div>

		<div class = "projects" id="projects">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "luvtalk-project project-square">
							<h3>LUV TALK Website</h3>
							<p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. </p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border more-button whiteButton" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "personal-website-project project-square">
							<h3>Personal Website</h3>
							<p>Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border more-button whiteButton" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "strike-zone-project project-square">
							<h3>Strike Zone Analysis</h3>
							<p>Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border more-button whiteButton" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5 see-more-button">
						<div class = "see-more-button">
							<a class = "btn btn-default btn-border whiteButton" href = "#">More Projects</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class = "contact" id="contact">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header">
							<h1>Contact</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header-quote">
							<h4>"XXXXX"</h4>
							<h4>-XXX</h4>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-6 col-md-6">
						<div class = "contact-instructions">
							<h2>Reaching out to me</h2>
							<p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
							<br></br>
							<br></br>
							<br></br>
							<h2>Contact Information</h2>
							<p>XXXX</p>
							<p>XXXX</p>
							<p>(XXXX)-445-7747</p>
							<p>XXXXXX@gmail.com</p>
						</div>
					</div>

					<div class = "col-sm-6 col-md-6">
						<div class = "contact-form-body">
							<form>
								<div class = "row">
									<div class = "col-sm-6 col-md-6">
										<div class = "firstname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "First Name"/>
										</div>
									</div>

									<div class = "col-sm-6 col-md-6">
										<div class = "lastname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "Last Name"/>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "email">
											<h4>Email *</h4>
											<input type = "text" placeholder= "Email"/>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "message">
											<h4>Message *</h4>
											<textarea placeholder= "Message"></textarea>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
										<div class = "submit-contact">
											<a class = "btn btn-default btn-border" href = "#">Submit</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

      </div>
  )
}
