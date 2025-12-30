import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
    let navigate = useNavigate()
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
<button onClick={() => navigate(1)}>Go Forward</button>

      <Link to="users">Users</Link>
<Link to="settings">Settings</Link>
<Outlet />

    </div>
  )
}

export default Dashboard
