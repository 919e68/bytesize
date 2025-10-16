'use client'

import { useToggle } from 'react-use'

import { RegistrationForm } from '~/components/forms/RegistrationForm'
import { Modal } from '~/components/primitive/Modal'

export const MainPageContent = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useToggle(false)

  return (
    <div>
      <button onClick={() => setIsRegistrationOpen(true)}>Register</button>

      <Modal
        description="Create your account"
        onClose={() => setIsRegistrationOpen(false)}
        open={isRegistrationOpen}
        title="Sign Up"
      >
        <RegistrationForm onSuccess={() => setIsRegistrationOpen(false)} />
      </Modal>
    </div>
  )
}
