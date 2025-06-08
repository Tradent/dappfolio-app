"use client"

import type React from "react"
import { createContext, useReducer, useContext, useEffect } from "react"
import type { AuthState, AuthAction, AuthContextType } from "./auth-types"
import { useRouter } from "next/navigation"

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN_START":
    case "SIGN_UP_START":
      return { ...state, isLoading: true, error: null }
    case "SIGN_IN_SUCCESS":
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      }
    case "SIGN_IN_FAILURE":
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      }
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    case "CLEAR_ERROR":
      return { ...state, error: null }
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const router = useRouter()

  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/session")

        // Check if the response is OK and has the correct content type
        if (response.ok) {
          const contentType = response.headers.get("content-type")
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json()
            if (data.user) {
              dispatch({ type: "SIGN_IN_SUCCESS", payload: data.user })
            } else {
              dispatch({ type: "SET_LOADING", payload: false })
            }
          } else {
            console.error("Response is not JSON")
            dispatch({ type: "SET_LOADING", payload: false })
          }
        } else {
          console.error("Failed to fetch session:", response.status)
          dispatch({ type: "SET_LOADING", payload: false })
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
        dispatch({ type: "SET_LOADING", payload: false })
      }
    }

    checkAuth()
  }, [])

  const signInWithEmail = async (email: string, password: string) => {
    dispatch({ type: "SIGN_IN_START" })
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign in")
      }

      dispatch({ type: "SIGN_IN_SUCCESS", payload: data.user })
      router.push("/app")
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
    }
  }

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    dispatch({ type: "SIGN_UP_START" })
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign up")
      }

      dispatch({ type: "SIGN_UP_SUCCESS", payload: data.user })
      router.push("/auth/verify-email")
    } catch (error: any) {
      dispatch({ type: "SIGN_UP_FAILURE", payload: error.message })
    }
  }

  const signInWithGoogle = async () => {
    dispatch({ type: "SIGN_IN_START" })
    try {
      // In a real implementation, this would redirect to Google OAuth
      window.location.href = "/api/auth/signin/google"
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
    }
  }

  const signInWithWallet = async (walletType: string) => {
    dispatch({ type: "SIGN_IN_START" })
    try {
      // This is a simplified version. In a real app, you would:
      // 1. Connect to the wallet
      // 2. Request the user to sign a message
      // 3. Verify the signature on the server
      // 4. Create or fetch the user account

      const response = await fetch("/api/auth/wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletType }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign in with wallet")
      }

      dispatch({ type: "SIGN_IN_SUCCESS", payload: data.user })
      router.push("/app")
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
    }
  }

  const signOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" })
      dispatch({ type: "SIGN_OUT" })
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const forgotPassword = async (email: string) => {
    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to send reset email")
      }

      dispatch({ type: "SET_LOADING", payload: false })
      return true
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
      return false
    }
  }

  const resetPassword = async (token: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to reset password")
      }

      dispatch({ type: "SET_LOADING", payload: false })
      router.push("/auth/sign-in?reset=success")
      return true
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
      return false
    }
  }

  const verifyEmail = async (token: string) => {
    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to verify email")
      }

      const data = await response.json()
      dispatch({ type: "SIGN_IN_SUCCESS", payload: data.user })
      router.push("/app")
      return true
    } catch (error: any) {
      dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
      return false
    }
  }

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" })
  }

  const value = {
    state,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithWallet,
    signOut,
    forgotPassword,
    resetPassword,
    verifyEmail,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
