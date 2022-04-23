import Button from "../../components/atoms/Button";
import ButtonGroup from "../../components/molecules/ButtonGroup";

import "./Home.scss";

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <span className="description">This is the button: <Button /></span>
        <span className="description">This is the button group: <ButtonGroup/></span>
    </div>
  );
}

export default Home;