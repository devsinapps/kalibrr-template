import React from 'react'
//Tools
import firebase from './../../config/firebaseConfig'
import { Link } from 'react-router-dom'
//Assets
import profilePict from './../assets/images/profile-pict.png'
//Custome-Grid
import { ContainerRow, ContainerFluidRow,  ColCard, Col_B } from './../custome-grid/BootstrapGrid'
//Reactstrap
import {Navbar, 
		NavbarBrand, 
		Col, 
		Card, 
		CardBody, 
		CardTitle,
		CardText, 
		CardFooter, 
		ListGroup, 
		ListGroupItem, 
		Input, 
		InputGroup, 
		InputGroupAddon, 
		InputGroupText, 
		Badge, 
		Breadcrumb, 
		BreadcrumbItem  } from 'reactstrap'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Navbar_Custome extends React.Component{
	state = {
		isExpanded: false,
		mode: ''
	}

	toggle = () => {
		const Sidebar = document.querySelector('.Sidebar-Menu');
		const Pages = document.querySelector('.Pages');
			  Sidebar.classList.toggle('Sidebar-Menu-Toggle');
			  Pages.classList.toggle('Pages-Toggle')
	}

	toggleDropdown = (mode) => {
		switch(mode){
			case 'Profile':
				this.setState({
					isExpanded: !this.state.isExpanded,
					mode: 'Profile'
				})
				break;

			case 'Message':
				this.setState({
					isExpanded: !this.state.isExpanded,
					mode: 'Message'
				})
				break;

			case 'Notification':
				this.setState({
					isExpanded: !this.state.isExpanded,
					mode: 'Notification'
				})
				break;
			default:
			return null
		}
	}
	render(){
		const { isExpanded, mode } = this.state
		const { auth } = this.props
		const dropdownView = isExpanded ? 'block' : 'none';
		const configView = {
			leftSideView: auth.uid != null ? 
				(
				<ul>
					<li> <FontAwesomeIcon icon='bars' onClick={this.toggle}/> </li>
					<li style={{color: '#74b9ff'}}> K-Tempalate </li>
					<li>
						<InputGroup> 
							<Input placeholder='Search...' />
							<InputGroupAddon addonType="prepend" > <InputGroupText style={{backgroundColor: '#74b9ff', color: '#ffffff'}}> <FontAwesomeIcon icon='search'/> </InputGroupText> </InputGroupAddon>
						</InputGroup> 
					</li>
				</ul>				)
				:
				(
				<ul>
					<li style={{color: '#74b9ff'}}> K-Tempalate </li>
				</ul>
				),
			rightSideView: auth.uid != null ?
				(
					<ul>
						<li onClick={()=>this.toggleDropdown('Message')}> <FontAwesomeIcon icon='envelope'/> </li>
						<li onClick={()=>this.toggleDropdown('Notification')}> 
							<FontAwesomeIcon icon='bell'/>
							<Badge color="danger">4</Badge> 
						</li>
						<li>
							<img src={profilePict} alt='profilePict' className='profilePict'/>
						</li>
						<li onClick={()=>this.toggleDropdown('Profile')}> 
							Username 
							<FontAwesomeIcon icon='sort-down'/>
						</li>
						<Dropdown_Navbar style={{display: dropdownView}} mode={mode} />
					</ul>
				)
				:
				(
					<ul>
						<li> 
							<Link to='/signup'> Sign up </Link> 
						</li>
						<li> 
							<Link to='/login'> Login </Link> 
						</li>
					</ul>
				)
		}
		return(
			<Navbar className='Navbar_Custome'>
				<div className='left-side'>
					{configView.leftSideView}
				</div>
				<div className='right-side'>
					{configView.rightSideView}
				</div>
			</Navbar>
		)
	}
}


export const Sidebar_Custome = (props) => {
	return(
		<div className='Sidebar_Custome'>
			<div className='Sidebar-Menu'>
				<ul>
					<li> 
						<FontAwesomeIcon icon='tachometer-alt' />
						<span> Dashboard </span>
					</li>
					<li> 
						<FontAwesomeIcon icon='user-alt' />
						<span> Profile </span>
					</li>
					<li> 
						<FontAwesomeIcon icon='folder' />
						<span> Applications </span>
					</li>
					<li> 
						<FontAwesomeIcon icon='envelope' />
						<span> Messages </span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export const Footer_Custome = (props) => {
	return(
		<div className='Footer_Custome'>
			<ContainerRow containerClass='Footer-Menu'>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<CardTitle> K-Tempalate </CardTitle>
					<CardText> We transform the way candidates find jobs and companies hire talent. </CardText>
				</ColCard>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> About </li>
						<li> Carreers </li>
						<li> Internships </li>
						<li> Press </li>
						<li> Blog </li>
						<li> Contact </li>
					</ul>
				</ColCard>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> About </li>
						<li> Carreers </li>
						<li> Internships </li>
						<li> Press </li>
						<li> Blog </li>
						<li> Contact </li>
					</ul>
				</ColCard>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> COMPANY </li>
						<li> Assestment </li>
						<li> Pricing </li>
						<li> Press </li>
						<li> Blog </li>
						<li> Contact </li>
					</ul>
				</ColCard>
			</ContainerRow>
			<ContainerRow containerClass='Footer-Media'>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> Google Play </li>
						<li> App Store </li>
					</ul>
				</ColCard>
				<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> <FontAwesomeIcon icon={['fab', 'facebook']} /> </li>
						<li> <FontAwesomeIcon icon={['fab', 'twitter']} /> </li>
						<li> <FontAwesomeIcon icon={['fab', 'instagram']} /> </li>
					</ul>
				</ColCard>
			</ContainerRow>
			<ContainerRow containerClass='Footer-Term'>
				<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='' brCard='mb-3' tlCard=''>
					<ul>
						<li> © 2019 Kalibrr, Inc. </li>
						<li> <Link to='/'> Term of User  </Link> </li>
						<li> <Link to='/'> Data Sharing Management  </Link> </li> 
						<li> <Link to='/'> Privacy Policy   </Link></li> 
						<li>  <Link to='/'> Report Problem  </Link> </li> 
					</ul>
				</ColCard>
			</ContainerRow>
		</div>
	)
}

export class Dropdown_Navbar extends React.Component{
	render(){
		const { style, mode } = this.props
		console.log(mode)
		switch(mode){
			case 'Profile':
				return(
					<div className='Dropdown_Navbar_Profile' style={style}>
						<Col lg='12'>
							<Card>
								<ul>
									<li> 
										<FontAwesomeIcon icon='user-alt'/>
										Profile 
									</li>
									<li> 
										<FontAwesomeIcon icon='cog'/>
										Account Setting
									 </li>
									<li> Help </li>
									<li onClick={() => firebase.auth().signOut()}> 
										<FontAwesomeIcon icon='sign-out-alt'/>
										Sign Out
									 </li>
								</ul>
							</Card>
						</Col>
					</div>
				)
				break;

			case 'Message':
				return(
					<div className='Dropdown_Navbar_Message' style={style}>
						<Card>
							<CardBody>
								<ListGroup>
							        <ListGroupItem className='Message-list'>
							        	<img src={profilePict} alt='message-pict' />
							        	Cras justo odio
							        </ListGroupItem>
							        <ListGroupItem className='Message-list'>
							        	<img src={profilePict} alt='message-pict' />
							        	Dapibus ac facilisis in
							        </ListGroupItem>
							        <ListGroupItem className='Message-list'>
							        	<img src={profilePict} alt='message-pict' />
							        	Morbi leo risus
							        </ListGroupItem>
							        <ListGroupItem className='Message-list'>
							        	<img src={profilePict} alt='message-pict' />
							        	Porta ac consectetur ac
							        </ListGroupItem>
							        <ListGroupItem className='Message-list'>
							        	<img src={profilePict} alt='message-pict' />
							        	Vestibulum at eros
							        </ListGroupItem>
						        </ListGroup>
						    </CardBody>
							<CardFooter>
								<CardText> View All Message </CardText>
							</CardFooter>
						</Card>
					</div>
				)
				break;
		
			case 'Notification':
				return(
					<div className='Dropdown_Navbar_Notification' style={style}>
						<Col lg='12'>
							<Card>
								<ul>
									<li> Profile </li>
									<li> Account Setting </li>
									<li> Help </li>
								</ul>
							</Card>
						</Col>
					</div>
				)
				break;

			default:
				return null
		}
		
	}
}