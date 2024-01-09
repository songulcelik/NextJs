"use client"
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const DashboardHeader = () => {
	return (
		<Navbar expand={false} className="bg-danger mb-3" collapseOnSelect>
			<Container>
				<Navbar.Brand href="#">Product Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
				<Navbar.Offcanvas
					id={`dashboardOffcanvas`}
					aria-labelledby={`dashboardOffcanvasLabel`}
					placement="start"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`dashboardOffcanvasLabel`}>
							Product Manager
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="/dashboard" as={Link}>
								Dashboard
							</Nav.Link>
							<Nav.Link href="/dashboard/products" as={Link}>
								Products
							</Nav.Link>
							<Nav.Link href="/dashboard/profile" as={Link}>
								Profile
							</Nav.Link>
              <Nav.Link href="/" as={Link}>
								Home
							</Nav.Link>
							<Nav.Link>Signout</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardHeader;
