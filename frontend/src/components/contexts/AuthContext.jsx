import React, { createContext, useContext, useEffect, useState } from 'react'
import pb, { login as pbLogin, logout as pbLogout, register as pbRegister } from '../../lib/Pocketbase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return pb.authStore?.record || null
    } catch (e) {
      return null
    }
  })

  useEffect(() => {
    // update user state when auth changes
    const unsub = pb.authStore.onChange(() => {
      setUser(pb.authStore?.record || null)
    })

    // make sure to sync initial value (in case it changed before mount)
    setUser(pb.authStore?.record || null)

    return () => {
      if (typeof unsub === 'function') unsub()
    }
  }, [])

  async function login(email, password) {
    const record = await pbLogin(email, password)
    setUser(pb.authStore?.record || null)
    return record
  }

  function logout() {
    pbLogout()
    setUser(null)
  }

  async function register(data = {}) {
    const record = await pbRegister(data)
    // if registration auto-logged in, sync user
    setUser(pb.authStore?.record || null)
    return record
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
    register,
    client: pb,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export default AuthContext
