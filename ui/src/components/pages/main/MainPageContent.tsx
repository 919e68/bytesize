'use client'

import { MySnacks } from '~/components/shared/MySnacks'
import { SnackSuggestions } from '~/components/shared/SnackSuggestions'
import { useCurrentUser } from '~/context/CurrentUserContext'

export const MainPageContent = () => {
  const { user } = useCurrentUser()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        {!user && (
          <div className="flex flex-1 flex-col">
            <h2 className="text-lg font-bold">My Snacks</h2>
            <p>Sign in to share your favorite snacks!</p>
          </div>
        )}
        {user && <MySnacks />}

        <SnackSuggestions />
      </div>
    </div>
  )
}
