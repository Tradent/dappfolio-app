export interface User {
  id: string
  email?: string
  name?: string
  walletAddress?: string
  isEmailVerified?: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
}

export type AuthAction =
  | { type: "SIGN_IN_START" }
  | { type: "SIGN_IN_SUCCESS"; payload: User }
  | { type: "SIGN_IN_FAILURE"; payload: string }
  | { type: "SIGN_UP_START" }
  | { type: "SIGN_UP_SUCCESS"; payload: User }
  | { type: "SIGN_UP_FAILURE"; payload: string }
  | { type: "SIGN_OUT" }
  | { type: "CLEAR_ERROR" }
  | { type: "SET_LOADING"; payload: boolean }

export interface AuthContextType {
  state: AuthState
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithWallet: (walletType: string) => Promise<void>
  signOut: () => Promise<void>
  forgotPassword: (email: string) => Promise<boolean>
  resetPassword: (token: string, password: string) => Promise<boolean>
  verifyEmail: (token: string) => Promise<boolean>
  clearError: () => void
}
