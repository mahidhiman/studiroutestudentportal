import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await auth.login(email, password)
      navigate('/')
    } catch (err) {
      setError(err?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Login form">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input block w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 placeholder:text-slate-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input block w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 placeholder:text-slate-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition"
          />
        </div>
      </div>

      {error && (
        <div className="text-sm text-rose-600 bg-rose-50 rounded-md px-3 py-2">{error}</div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-md hover:from-primary-500 hover:to-primary-400 disabled:opacity-60 transition"
        >
          {loading ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          ) : null}
          <span>{loading ? 'Signing in…' : 'Sign in'}</span>
        </button>
      </div>

      <div className="pt-2 border-t border-slate-100 text-center">
        <button type="button" className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
          <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Continue with SSO
        </button>
      </div>
    </form>
  )
}
