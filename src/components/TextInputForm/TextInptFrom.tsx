import React,{ChangeEvent,FormEvent,useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

export type TextInptFromProps = {
    onSubmit?:(value : string, class_name : string, id : string) => void;
}

function TextInputForm( {onSubmit} : TextInptFromProps){
    const [value,setValue] = useState('');

    const [class_value,setClassValue] = useState('');

    const [l_id,setId] = useState('');

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value || '';
        setValue(value);

        const class_value = e.target.className || 'not found';
        setClassValue(class_value);

        const l_id = e.target.id;
        setId(l_id);

    };

    const handleClick = () => {
        if(l_id && value){
            const input_element_from_id = document.getElementById(l_id) as HTMLInputElement;
            if(input_element_from_id){
              input_element_from_id.value = '';
            }
            setValue("");
        }
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(value,class_value,l_id);
    };

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <div className="flex-1 mr-2" id="idd1">
                <TextInput
                    onChange={handleChange}
                    type = "password"
                    label="Enter a word or a phase"
                    value={value}
                    />
            </div>
            <div className="flex-initial">
                <Button
                    text="Ok"
                    type="submit"
                />
            </div>
            <div className="flex-final">
                <Button
                    text="Clear"
                    type="button"
                    onClick={handleClick}
                />
            </div>
           
        </form>

    );
}

export default TextInputForm;