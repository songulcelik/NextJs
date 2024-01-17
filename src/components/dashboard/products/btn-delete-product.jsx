"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const BtnDeleteProduct = ({ id }) => {
	const handleClick = () => {
		const resp = confirm("Are you sure to delete?");

		if (!resp) return;
	};

	return (
		<Button variant="link" onClick={handleClick}>
			<FaRegTrashAlt />
		</Button>
	);
};

export default BtnDeleteProduct;
