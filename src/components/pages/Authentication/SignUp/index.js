import React from 'react'
//Assets
import Loading from './../../../assets/images/Spin-1s-200px.gif'
//Tools
import { Link } from 'react-router-dom'
//Custome-grid
import { ContainerFluidRow, ColCard } from './../../../custome-grid/BootstrapGrid'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button, CardText, CardTitle } from 'reactstrap'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SignUp extends React.Component{
	state = {
		isExpanded: false,
		loading: true
	}

	actionForm = (mode) => {
		switch(mode){
			case 'ICON-PASSWORD':
				this.setState({
					isExpanded: !this.state.isExpanded
				})
				break;

			default:
				return null
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		}, 3000)
	}
	render(){
		const { isExpanded, loading } = this.state 
		const config = {
			iconPassword: isExpanded ? 'eye' : 'eye-slash',
			passwordType: isExpanded ? 'text' : 'password'
		}
		if(loading != true){
			return(
				<div className='SignUp'>
					<ContainerFluidRow>
						<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' tlCard=''>
							<CardTitle> Sign Up </CardTitle>
							<Form>
								<Row form>
									<Col md='6'>
										<FormGroup>
											<Label htmlFor='firstName'> First Name </Label>
											<Input
												id='firstName'
											/>
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup>
											<Label htmlFor='lastName'> Last Name </Label>
											<Input
												id='lastName'
											/>
										</FormGroup>
									</Col>
								</Row>
								<FormGroup>
									<Label htmlFor='email'> Email </Label>
									<Input
										id='email'
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor='password'> Password </Label>
									<Input
										id='password'
										type={config.passwordType}
									/>
									<span className='icon-input-password' onClick={()=>this.actionForm('ICON-PASSWORD')}> <FontAwesomeIcon icon={config.iconPassword} /> </span>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type='checkbox'
										/>{' '}I have read and I agree with Kalibrr's Terms and Conditions, Privacy Policy, and End User License Agreement.
									</Label>
								</FormGroup>
								<br />
								<FormGroup>
									<Button block color='primary'> SIGN UP </Button>
								</FormGroup>
								<hr />
								<FormGroup className='text-center'>
									<CardText> Already have an account? <Link to='/login'> Login </Link> </CardText>
								</FormGroup>
							</Form>
						</ColCard>
					</ContainerFluidRow>
				</div>
			)
		}
		else{
			return(
				<div className='Pages-Loading'>
					<img src={Loading} alt='loading' />
				</div>
			)
		}	
	}
}

export default SignUp