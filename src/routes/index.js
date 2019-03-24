import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
//Custom Grid
import { ContainerRow, ColCard } from './../components/custome-grid/BootstrapGrid'
//Layout
import { Navbar_Custome, Sidebar_Custome, Footer_Custome } from './../components/layout/Layout_Custome'
//Pages
import Dashboard_Admin from './../components/pages/Dashboard-Admin'
import SignIn from './../components/pages/Authentication/SignIn'
import SignUp from './../components/pages/Authentication/SignUp'
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
	// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faEnvelope, faBell, faSortDown, faBars, faUserAlt, faCog, faSignOutAlt, faSearch, faTachometerAlt, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

library.add(faEye, faEyeSlash, faEnvelope, faBell, faSortDown, faBars, faUserAlt, faCog, faSignOutAlt, faSearch, faTachometerAlt, faFolder, faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram)
class Routes extends React.Component{
	render(){
		const { auth } = this.props
		const configView = {
			sidebarView: auth.uid != null ? (<Sidebar_Custome />) : null,
			pagesClass: auth.uid != null ? 'Pages' : 'Pages-Auth-Active' ,
			footerView: auth.uid != null ? null  : (<Footer_Custome />)
		}
		return(
			<Router>
				<div id='Routes'>
					<Navbar_Custome 
						auth={auth}
					/>
					{configView.sidebarView}
					<div className={configView.pagesClass}>
						<Switch>
							<Route path='/' render={(routeProps) => (<Dashboard_Admin {...routeProps} auth={auth} /> )} exact/>
							<Route path='/login' render={(routeProps) => (<SignIn {...routeProps} auth={auth} /> )} />
							<Route path='/signup' component={SignUp} />
						</Switch>
					</div>
					{configView.footerView}
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Routes)