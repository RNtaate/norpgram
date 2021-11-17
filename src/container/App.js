import './App.css';
import Signup from '../Auth/Signup';
import Dashboard from './Dashboard';
import Login from '../Auth/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../Auth/ForgotPassword';
import UpdateProfile from '../Auth/UpdateProfile';
import Navbar from './Navbar';

function App() {
  return (

    <div
      className="d-flex align-items-center flex-column"
      style={{
        minHeight: "100vh",
        // position: "relative",
        maxWidth: "75%",
        width: "75%",
        margin: "0 auto"
      }}
    >
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/update_profile" component={UpdateProfile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot_password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
