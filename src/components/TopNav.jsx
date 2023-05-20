import Button from "./Button";
import GetLangText from '../app/helpers/language';

const TopNav = () => {
    return <div className="topNav">
        <div className="topNavSection">
            <div>L</div>
            <div>R</div>
        </div>
        <div className="topNavSection">
            <span className="signUp">{GetLangText("SignUp")}</span>
            <Button text={GetLangText("LogIn")} btnType="pill" textType="drk" />
        </div>
    </div>
}

export default TopNav;