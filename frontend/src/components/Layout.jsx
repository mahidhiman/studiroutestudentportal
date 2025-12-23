import { Link, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function Layout() {
  const { user, logout } = useAuth()

  return (
    <div style={{fontFamily: 'system-ui, sans-serif', padding: 20}}>
      <header style={{marginBottom: 16}}>
        <h2>Studiroute</h2>
        <nav>
          <Link to="/" style={{marginRight: 8}}>Home</Link>
          <Link to="/about" style={{marginRight: 8}}>About</Link>
          {!user ? (
            <>
              <Link to="/login" style={{marginRight: 8}}>Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <span style={{marginRight: 8}}>Hi, {user?.email || user?.id}</span>
              <button onClick={() => logout()}>Logout</button>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
