import { Popcorn, Search, User } from 'lucide-react'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Popcorn className="text-orange-600" />
            <h1 className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-xl font-bold text-transparent">
              SnackSwap
            </h1>
          </div>

          <div className="mx-8 hidden max-w-md flex-1 md:flex">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-4" />
              </div>

              <input
                className="w-full rounded-full border border-gray-200 bg-gray-100/90 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Search for pizza, chips, drinks ..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button className="rounded-full bg-orange-400 p-2 hover:bg-yellow-100 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">
              <User className="text-white" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
