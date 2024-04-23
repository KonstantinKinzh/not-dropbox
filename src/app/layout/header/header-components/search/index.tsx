import LoupIcon from "@/resources/layout/header/search/loupe.png";
import "./index.scss";

export default function Search() {
    return (
        <div className='search'>
            <div className="search-wrapper">
                <img className="search__icon" src={LoupIcon} alt="Icons images" />
                <input className="search__input" type="text" placeholder="Поиск" />
            </div>
        </div>
    );
};