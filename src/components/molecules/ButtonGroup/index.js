import CustomButton from "../../atoms/Button";
import "./ButtonGroup.scss";

function ButtonGroup() {
  return (
    <div className="button-group">
        <CustomButton/>
        <CustomButton/>
    </div>
  );
}

export default ButtonGroup;