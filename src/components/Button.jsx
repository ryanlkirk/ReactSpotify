const Button = ({ textType, text }) => {
    const textStyle = textType ? "drkBtn" : "light";
    const className = `btnPill ${textStyle}`;

    return <div className={className}>{text}</div>;
};


export default Button;