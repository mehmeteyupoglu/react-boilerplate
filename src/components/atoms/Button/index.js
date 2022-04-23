import "./Button.scss";
import Button from 'react-bootstrap/Button';

function CustomButton({title, onClick, className, variant}) {
  return (
    <Button className={`primary mr-2 ${className}`} onClick={onClick} variant={variant}>
        {title || 'Button'}
    </Button>
  );
}

export default CustomButton;