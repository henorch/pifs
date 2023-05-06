import { ButtonContainer } from "./button.styled";


const BUTTON_TYPES_CLASSES = {
    google:'google-sign-in',
    inverted: 'inverted'
}




const Button = ({children, buttonType, ...otherProps}) => {
    return (<ButtonContainer className={`${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps} >{children}</ButtonContainer>)
}

export default Button;