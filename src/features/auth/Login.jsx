import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from './authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.auth);

  // Clear error when component mounts or tabs change
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch, activeTab]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container w-50 mt-5">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Register
          </button>
        </li>
      </ul>

      {activeTab === 'login' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {typeof error === 'string' ? error : JSON.stringify(error)}
            </div>
          )}
        </form>
      )}

      {activeTab === 'register' && (
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-success w-100">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default Login;