import "./header.scss";
function Header() {
  return (
    <>
      <div className='s-header'>
        <div className='s-menu s-pLR30'>
          <span>Home</span>
        </div>
        <div className='s-menu s-pLR30'>
          <span>Information</span>
        </div>
        <div className='s-menu s-pLR30'>
          <span>Products</span>
          <div className='s-menu-content'>
            <div className='s-menu-items'>
              <span>CPU</span>
            </div>
            <div className='s-submenu-content'>
              <div className='s-submenu-items'>
                <span>Intel</span>
              </div>
              <div className='s-submenu-items'>
                <span>AMD</span>
              </div>
            </div>
            <div className='s-menu-items'>
              <span>VGA</span>
            </div>
            <div className='s-menu-items'>
              <span>RAM</span>
            </div>
            <div className='s-menu-items'>
              <span>Screens</span>
            </div>
            <div className='s-menu-items'>
              <span>Main board</span>
            </div>
          </div>
        </div>
        <div className='s-menu s-pLR30'>
          <span>Contact</span>
        </div>
        <div className='s-menu s-pLR30'>
          <span>License</span>
        </div>
      </div>
    </>
  );
}
export default Header;
