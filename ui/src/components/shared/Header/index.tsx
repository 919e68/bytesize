'use client'

import { LogOut, Popcorn, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { LoginForm } from '~/components/forms/LoginForm'
import { RegistrationForm } from '~/components/forms/RegistrationForm'
import { Modal } from '~/components/primitive/Modal'
import { Button } from '~/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { useCurrentUser } from '~/context/CurrentUserContext'
import { useLogoutUser } from '~/graphql/hooks/auth/useLogoutUser'
import { CodedError } from '~/lib/types/global'

import { ErrorRenderer } from '../ErrorRenderer'

export const Header = () => {
  const { setUser, user } = useCurrentUser()
  const [action, setAction] = useState<string | undefined>()

  const logoutUserMutation = useLogoutUser({
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: () => {
      setUser(null)
      toast.success('Success', {
        description: `You’ve been logged out. See you soon 👋`
      })
    }
  })

  const handleRegister = () => {
    setAction('signup')
  }

  const handleLogin = () => {
    setAction('login')
  }

  const handleLogout = () => {
    logoutUserMutation.mutate()
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Popcorn className="text-orange-600" />
            <h1 className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-xl font-bold text-transparent">
              SnackSwap
            </h1>
          </div>

          {user ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full bg-orange-400 p-2 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">
                    <User className="text-white" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex flex-col">
                <div className="text-xs">{user.username}</div>
                <div className="text-sm font-bold">{user.name}</div>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <button className="cursor-pointer rounded-full text-sm font-bold text-orange-600" onClick={handleRegister}>
                Sign Up
              </button>
              <Button className="cursor-pointer rounded-full text-sm font-bold text-white" onClick={handleLogin}>
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>

      <Modal
        className="max-h-[calc(100vh-80px)]"
        description={action === 'signup' ? 'Join us and get started in seconds.' : 'Back for more? Let’s do this.'}
        onClose={() => setAction(undefined)}
        open={Boolean(action)}
        title={action === 'signup' ? 'Sign Up' : 'Login'}
      >
        <div className="max-h-[calc(100vh-180px)] flex-1 overflow-y-auto px-2">
          {action === 'signup' && <RegistrationForm onSuccess={() => setAction(undefined)} />}
          {action === 'login' && <LoginForm onSuccess={() => setAction(undefined)} />}
        </div>
      </Modal>
    </header>
  )
}
