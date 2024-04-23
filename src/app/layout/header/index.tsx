// Componets
import Search from "@/app/layout/header/header-components/search";
import GetInform from "@/app/layout/header/header-components//get-inform";

// Styles
import './index.scss';

function Header() {

  return (
    <header className='header'>
      <div className="header-wrapper">
        <Search />
        <GetInform/>
      </div>
    </header>
  )
};

export default Header;