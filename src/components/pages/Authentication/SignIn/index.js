import React from 'react'
//Assets
import Loading from './../../../assets/images/Spin-1s-200px.gif'
//Tools
import firebase from './../../../../config/firebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Redirect, Link } from 'react-router-dom'
//Custome-grid
import { ContainerFluidRow, ColCard } from './../../../custome-grid/BootstrapGrid'
//Reactstrap
import { Form, FormGroup, Label, Input, Button, CardText, CardTitle } from 'reactstrap'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SignIn extends React.Component{
	state = {
		isSignedIn: false,
		isExpanded: false,
		loading: true
	}

	//Option sign in firebase
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false
		}
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				isSignedIn: !!user
			})
			// console.log(user)
		})
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		}, 3000)
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
	render(){
		const { isExpanded, loading } = this.state
		const { auth } = this.props
		const config = {
			iconPassword: isExpanded ? 'eye' : 'eye-slash',
			passwordType: isExpanded ? 'text' : 'password'
		}
		if(auth.uid != null) return <Redirect to='/' />;
		if(loading != true){
			return(
				<div className='SignIn'>
					<ContainerFluidRow>
						<ColCard lgCol='4' mdCol='4' smCol='4' xsCol='4' colClass='mx-auto' brCard='' tlCard=''>
							<CardTitle> Login to Website </CardTitle>
							<Form>
								<FormGroup>
									<Label htmlFor='email'> Email </Label>
									<Input
										id='email'
										placeholder='johndoe@gmail.com'
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
										/>{' '}Remember me
									</Label>
								</FormGroup>
								<br />
								<FormGroup>
									<Button block color='primary'> LOGIN </Button>
								</FormGroup>
								<hr />
								<StyledFirebaseAuth
									uiConfig={this.uiConfig}
									firebaseAuth={firebase.auth()}
								/>
								<hr />
								<FormGroup className='text-center'>
									<CardText> Don't have a Account ? <Link to='/signup'> Sign Up </Link> </CardText>
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


export default SignIn