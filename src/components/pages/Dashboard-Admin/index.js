import React from 'react'
//Tools
import { Redirect } from 'react-router-dom'
//Custome-Grid
import { ContainerFluidRow, ColCard, Col_B, Pages_Title } from './../../custome-grid/BootstrapGrid'
class Dashboard_Admin extends React.Component{
	render(){
		const { auth } = this.props
		if(auth.uid == null) return <Redirect to='/login' />;
 		return(
			<div className='Dashboard_Admin'>
				<ContainerFluidRow>
					<Pages_Title title='Dashboard'/>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='' brCard='mb-3' tlCard=''>
					</ColCard>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default Dashboard_Admin