// Icons
import IntroductionIcon from "@/resources/layout/header/get-inform/introduction.png";
import QuestionIcon from "@/resources/layout/header/get-inform/question.png";
import BellIcon from "@/resources/layout/header/get-inform/bell-icon.png";

// Components 
import IconInterface from "@/shared/global-components/icon-interface";
import Account from "@/components/header/account";
import PaymentDetails from "@/components/header/payment-details";

// Styles
import "./index.scss";

export default function GetInform() {
    return (
        <div className='get-inform'>
            <div className="get-inform__frame">
                <IconInterface
                    icon={IntroductionIcon}
                    classIcon="get-inform__icon"
                    width={20}
                    height={20}
                    alt="Icon header"
                />
            </div>

            <div className="get-inform__frame">
                <IconInterface
                    icon={QuestionIcon}
                    classIcon="get-inform__icon"
                    width={20}
                    height={20}
                    alt="Icon header"
                />
            </div>

            <div className="get-inform__frame">
                <IconInterface
                    icon={BellIcon}
                    classIcon="get-inform__icon"
                    width={20}
                    height={20}
                    alt="Icon header"
                />
            </div>

            <Account />
            <PaymentDetails />
        </div>
    );
};