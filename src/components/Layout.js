import { Outlet } from "react-router-dom";
import logo from '../logo.svg';

// set up app sheel, header and footer
const Layout = () => {
  return(
  <main style={{ padding: '1rem 0' }}>

    <header className="App-header">
      header
    </header>

    <div className="App">
      <Outlet />
    </div>

    <footer>
      Footer
    </footer>
    
  </main>
  );
};

export default Layout;