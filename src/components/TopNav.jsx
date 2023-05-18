import Button from "./Button";

const TopNav = () => {
    return <div className="topNav">
        <div className="topNavSection">
            <div>L</div>
            <div>R</div>
        </div>
        <div className="topNavSection">
            <span className="signUp">Sign Up</span>
            <Button text="Log in" btnType="pill" textType="drk" />
        </div>
    </div>
}

export default TopNav;