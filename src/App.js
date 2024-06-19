import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login.component';
import Registration from './pages/registration/Registration.component';
import Dashboard from './pages/dashboard/Dashboard.component';

function App() {
  const isLogin = false;
  const homeComponent = isLogin ? Dashboard : Login;

  return (
    <Routes>
      <Route path='/' Component={homeComponent} />    
      <Route path='/login' Component={Login} />    
      <Route path='/registration' Component={Registration} />    
    </Routes>
  );
}

export default App;
