import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', padding: 20}}>
      <header style={{marginBottom: 16}}>
        <h2>Studiroute</h2>
        <nav>
          <Link to="/" style={{marginRight: 8}}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
