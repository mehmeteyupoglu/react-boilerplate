import "./Button.scss";
import Button from 'react-bootstrap/Button';

function CustomButton({ title, onClick, className, variant, loading, async }) {
    title = title || "Button"

    return (
        <>
            <Button
                className={`primary mr-2 ${className}`}
                onClick={onClick}
                variant={variant}
                disabled={loading}
            >
                {
                    (loading && async) ?
                        <span className="spinner-border text-light"></span> :
                        title
                }
            </Button>
        </>

    );
}

export default CustomButton;