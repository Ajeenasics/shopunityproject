import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholesaleDealerRegistration from './Components/wholesaledealer/WholesaleDealerRegistration';
import WholesaleDealerLogin from './Components/wholesaledealer/WholesaleDealerLogin';
import CustomerRegistration from './Components/customer/CustomerRegistration';
import CustomerLogin from './Components/customer/CustomerLogin';
import DeliveryAgentRegistration from './Components/delivery agent/DeliveryAgentRegistration';
import DeliveryagentLogin from './Components/delivery agent/DeliveryagentLogin';
import ShopOwnerRegistration from './Components/ShopOwner/ShopOwnerRegistration';
import ShopOwnerLogin from './Components/ShopOwner/ShopOwnerLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import WholesaleDealerHomepage from './Components/wholesaledealer/WholesaleDealerHomepage';
import ShopownerHomepage from './Components/ShopOwner/ShopownerHomepage';
import DeliveryagentHomepage from './Components/delivery agent/DeliveryagentHomepage';
import CustomerHomePage from './Components/customer/CustomerHomePage';
import LandingPage from './Components/Admin/LandingPage';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<LandingPage/>,<Footer/>]}/>

    <Route path='/wholesaledealerregistration' element={[<Navigation/>,<WholesaleDealerRegistration/>,<Footer/>]} />
    <Route path='/wholesaledealerlogin' element={[<Navigation/>,<WholesaleDealerLogin/>,<Footer/>]} />

    <Route path='/customerregistration' element={[<Navigation/>,<CustomerRegistration/>,<Footer/>]} />
    <Route path='/customerlogin' element={[<Navigation/>,<CustomerLogin/>,<Footer/>]} />

    <Route path='/deliveryagentregistration' element={[<Navigation/>,<DeliveryAgentRegistration/>,<Footer/>]} />
    <Route path='/deliveryagentlogin' element={[<Navigation/>,<DeliveryagentLogin/>,<Footer/>]} />

    <Route path='/shopownerregistration' element={[<Navigation/>,<ShopOwnerRegistration/>,<Footer/>]} />
    <Route path='/shopownerlogin' element={[<Navigation/>,<ShopOwnerLogin/>,<Footer/>]} />

    <Route path='/Admin' element={[<Navigation/>,<AdminLogin/>,<Footer/>]} />

    <Route path='/wholesaledealerhome' element={[<Navigation/>,<WholesaleDealerHomepage/>,<Footer/>]} />
    <Route path='/shopownerhome' element={[<Navigation/>,<ShopownerHomepage/>,<Footer/>]} />
    <Route path='/deliveryagenthome' element={[<Navigation/>,<DeliveryagentHomepage/>,<Footer/>]} />
    <Route path='/customerhome' element={[<Navigation/>,<CustomerHomePage/>,<Footer/>]} />
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
