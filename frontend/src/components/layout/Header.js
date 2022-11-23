
import logoImage from '../../assets/logo.png';

const Header = props => {
  return (
  <div>
    <header>
      <h1>Logo</h1>
      <button>Cart</button>
    </header>
    <div>
      <img src={logoImage} alt="logo" />
    </div>
  </div>
  );
}

export default Header;