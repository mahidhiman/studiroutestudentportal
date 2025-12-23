import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (password !== confirm) return setError('Passwords do not match')
    setLoading(true)
    try {
      await auth.register({ email, password })
      navigate('/')
    } catch (err) {
      setError(err?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
      <div style={{marginBottom: 8}}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{width: '100%'}} />
      </div>
      <div style={{marginBottom: 8}}>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required style={{width: '100%'}} />
      </div>
      <div style={{marginBottom: 8}}>
        <label>Confirm password</label>
        <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required style={{width: '100%'}} />
      </div>
      {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
      <button type="submit" disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
    </form>
  )
}
