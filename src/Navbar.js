const Logo = () => {
  return (
    <div className='logo'>
      <img
        src='https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png'
        alt='Logo'
      />
      <h1>
        <a href='/'>Food Anomaly</a>
      </h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;