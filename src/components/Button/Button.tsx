import React, { SyntheticEvent } from 'react';

type ButtonProps = {
	text: string;
	type?: 'button' | 'submit';
	onClick?: (e: SyntheticEvent) => void;
};

function Button({ onClick, text, type = 'button' }: ButtonProps) {
	return (
		<button
			className="input-button"
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
}

export default Button;