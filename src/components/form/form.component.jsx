import { useForm } from "react-hook-form";
import { Label, Group, Input} from "./form.styled";


const FormInput = ({register,  label, ...OtherProps}) => {
    return(
        <Group>
             <Label>{label}</Label>
            <Input  {...register(label, {required: `${label} is required`,
        })}/>
            
        </Group>
       
    )
}

export default FormInput;