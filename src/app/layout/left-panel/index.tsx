// Icons
import LogoIcon from "@/resources/layout/left-panel/icons/logo.png";
import AllFilesIcon from "@/resources/layout/left-panel/icons/all-files.png";
import SignatureIcons from "@/resources/layout/left-panel/icons/signature.png";
import SubmitIcon from "@/resources/layout/left-panel/icons/submit.png";
import PhotoIcon from "@/resources/layout/left-panel/icons/photo.png";

// Modules React-router
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <Link className="left-panel__logo-link" to="/">
                <img className="left-panel__logo" src={LogoIcon} alt="Logo site" />
            </Link>
            <ul className="left-panel__list">
                <li className="left-panel__li">
                    <Link className="left-panel__link" to="/all-files">
                        <img className="left-panel__icon" src={AllFilesIcon} alt="Logo site" />
                        <span className="left-panel__text">Все файлы</span>
                    </Link>
                </li>
                <li className="left-panel__li">
                    <Link className="left-panel__link" to="/subscriptons">
                        <img className="left-panel__icon" src={SignatureIcons} alt="Logo site" />
                        <span className="left-panel__text">Подписки</span>
                    </Link>
                </li>
                <li className="left-panel__li">
                    <Link className="left-panel__link" to="/sending-tracking">
                        <img className="left-panel__icon" src={SubmitIcon} alt="Logo site" />
                        <span className="left-panel__text">Отправка и отслеживание</span>
                    </Link>
                </li>
                <li className="left-panel__li">
                    <Link className="left-panel__link" to="/photo">
                        <img className="left-panel__icon" src={PhotoIcon} alt="Logo site" />
                        <span className="left-panel__text">Фото</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}
