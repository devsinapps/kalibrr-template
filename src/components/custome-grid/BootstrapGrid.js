import React from 'react'
//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
export const ContainerFluidRow = (props) => {
	const { children } = props
	return(
		<Container fluid>
			<Row>
				{children}
			</Row>
		</Container>
	)
}

export const ContainerRow = (props) => {
	const { children, containerClass } = props
	return(
		<Container className={containerClass}>
			<Row>
				{children}
			</Row>
		</Container>
	)
}

export const ColCard = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, styleCol, styleCard, actionCol, actionCard, children } = props
	const configView = {
		headerView: tlCard === '' ? null : (<CardHeader> {tlCard} </CardHeader>)
	}
	return(
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
			<Card className={brCard}>
				{configView.headerView}
				<CardBody>
					{children}
				</CardBody>
			</Card>
		</Col>
	)
}

export const Col_B = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass, styleCol, children } = props
	return(
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
			{children}
		</Col>
	)
}

export const Pages_Title = (props) => {
	const { title } = props
	return(
		<Col lg='12' md='12' sm='12' xs='12'>
			<Breadcrumb>
	        	<BreadcrumbItem active> {title} </BreadcrumbItem>
	     	</Breadcrumb>
		</Col>
	)
}