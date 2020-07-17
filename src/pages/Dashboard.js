import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { loading } = React.useContext(GithubContext);
  return (
    <main>
      {
        loading ? <img className="loading-img" alt="Loading..." src={loadingImage} /> : null
      }
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
