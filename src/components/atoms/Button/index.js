import Button from 'react-bootstrap/Button';
function CustomButton({ title, onClick, className, variant, loading, async }) {
    return (
        <>
            <Button
                className={`ms-2 ${className}`}
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

CustomButton.defaultProps = {
    title: "Button",
    className: "",
    variant: "primary",
    loading: false,
    async: false,
}

export default CustomButton;