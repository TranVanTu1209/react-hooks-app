import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// Provider, Consumer, => GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFolowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const searchUser = async (user) => {
    setLoading(true);
    const response = await axios.get(`${rootUrl}/users/${user}`).catch(err => console.log(err));
    setRequests(requests - 1);
    if (response)
    {
      setUser(response.data);
      const { login, followers_url } = response.data;
      axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
        .then(res => {
          setRepos(res.data);
        }).catch(err => console.log(err));
      axios.get(`${rootUrl}/users/${login}/followers`)
        .then(res => {
          setFolowers(res.data);
        }).catch(err => console.log(err));
    } else
    {
      toggleError(true, 'There is no user with this name');
    }
    setLoading(false);
  }
  const checkRequests = () => {
    axios.get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { rate } = data;
        setRequests(rate.remaining);
        if (rate.remaining === 0)
        {
          // throw an error
          toggleError(true, 'Sorry, you out of turn');
        }
      }).catch(err => {
        // throw an error
        toggleError(true, 'Bad request');
      });
  }

  const toggleError = (show, msg) => {
    setError({ show, msg });
    setTimeout(() => {
      setError(false, '');
    }, 5000);
  }

  useEffect(checkRequests, []);
  return <GithubContext.Provider value={{
    user, repos, followers, requests, error, searchUser, loading
  }}>
    {children}
  </GithubContext.Provider>
}
export {
  GithubProvider,
  GithubContext
};