
import image from "../../images/not-found.jpg";
import "./NotFound.scss";

function NotFound() {
    return (
        <div>
            <img src={image} alt="Not Found" />
        </div>
    );
}

export default NotFound;