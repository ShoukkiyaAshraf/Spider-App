import React, { ChangeEvent } from 'react';

export type TextInputProps = {
    id ?: string;
	label?: string;
	type?: 'number' | 'password' | 'text';
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ label, onChange, type = 'text', value }: TextInputProps) {
	return (
		<label className="TextInput block">
			{label && <span className="sr-only">{label}</span>}
			<input
				className="px-4 py-2 border border-gray-500 rounded-md w-full input-label"
				onChange={onChange}
				placeholder={label}
				type={type}
                id = "input-1"
				value={value}
			/>
		</label>
	);
}

export default TextInput;