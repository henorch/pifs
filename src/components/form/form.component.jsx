import { Label, Group, Input} from "./form.styled";

const FormInput = ({label, ...OtherProps}) => {
    return(
        <Group>
             <Label>{label}</Label>
            <Input {...OtherProps}/>
        </Group>
       
    )
}

export default FormInput;