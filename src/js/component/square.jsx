import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [initialValue, setInitialValue] = useState("");

	const moonOrStar = parameter => {
		if (parameter === true && initialValue === "") {
			setInitialValue("X");
		} else if (parameter === false && initialValue === "") {
			setInitialValue("O");
		}
		props.changeContent();
	};

	return (
		<div
			className="square-class"
			onClick={() => moonOrStar(props.parameterForSonAYUDA)}>
			{initialValue}
		</div>
	);
};

Square.propTypes = {
	changeContent: PropTypes.func,
	parameterForSonAYUDA: PropTypes.bool
};

export default Square;
