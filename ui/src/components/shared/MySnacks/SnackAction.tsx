import { Button } from '~/components/ui/button'

export const SnackAction = () => {
  return (
    <div className="flex w-full justify-end gap-2">
      <Button className="w-20 rounded-full text-xs font-semibold">Edit</Button>
      <Button className="w-20 rounded-full bg-red-500 text-xs font-semibold">Remove</Button>
    </div>
  )
}
