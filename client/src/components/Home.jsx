/* eslint-disable react/react-in-jsx-scope */
// import User from './components/User/User';
import { Navbar, Welcome, Footer, Services, Transactions } from '../components';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Services />
      <Transactions />
    </div>
  )
}

export default Home;