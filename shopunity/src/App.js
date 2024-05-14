import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholesaleDealerRegistration from './Pages/wholesaledealer/WholesaleDealerRegistration';
import WholesaleDealerLogin from './Pages/wholesaledealer/WholesaleDealerLogin';
import CustomerRegistration from './Pages/customer/CustomerRegistration'
import CustomerLogin from './Pages/customer/CustomerLogin';
import DeliveryAgentRegistration from './Pages/delivery agent/DeliveryAgentRegistration'
import DeliveryagentLogin from './Pages/delivery agent/DeliveryagentLogin'
import ShopOwnerRegistration from './Pages/ShopOwner/ShopOwnerRegistration'
import ShopOwnerLogin from './Pages/ShopOwner/ShopOwnerLogin'
import AdminLogin from './Pages/Admin/AdminLogin';
import WholesaleDealerHomepage from './Pages/wholesaledealer/WholesaleDealerHomepage'
import ShopownerHomepage from './Pages/ShopOwner/ShopownerHomepage'
import DeliveryagentHomepage from './Pages/delivery agent/DeliveryagentHomepage'
import CustomerHomePage from './Pages/customer/CustomerHomePage'
import Navigation from './Pages/Navigation'
import Footer from './Pages/Footer'
import LandingPage from './Pages/Admin/LandingPage';
import AdminDashboard from './Components/AdminDashboard';
import ShopHomePage from './Components/ShopOwner/ShopHomePage';
import ShopOwnerNav from './Pages/Navs/ShopOwnerNav';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<LandingPage/>,<Footer/>]}/>

    {/* wholesaledealer */}

    <Route path='/wholesaledealerregistration' element={[<Navigation/>,<WholesaleDealerRegistration/>,<Footer/>]} />
    <Route path='/wholesaledealerlogin' element={[<Navigation/>,<WholesaleDealerLogin/>,<Footer/>]} />
    <Route path='/wholesaledealerhome' element={[<Navigation/>,<WholesaleDealerHomepage/>,<Footer/>]} />

{/* Customer */}

    <Route path='/customerregistration' element={[<Navigation/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<Navigation/>,<CustomerLogin/>,<Footer/>]} />
    <Route path='/customerhome' element={[<Navigation/>,<CustomerHomePage/>,<Footer/>]} />

{/* deliveryagent */}

    <Route path='/deliveryagentregistration' element={[<Navigation/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<Navigation/>,<DeliveryagentLogin/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<Navigation/>,<DeliveryagentHomepage/>,<Footer/>]} />

{/* shopowner */}

    <Route path='/shopownerregistration' element={[<Navigation/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<Navigation/>,<ShopOwnerLogin/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<ShopOwnerNav/>,<ShopHomePage/>,<Footer/>]} />

{/* Admin */}

    <Route path='/Admin' element={[<Navigation/>,<AdminLogin/>,<Footer/>]} />
    <Route path='admin_dashboard' element={<AdminDashboard/>}/>

    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
