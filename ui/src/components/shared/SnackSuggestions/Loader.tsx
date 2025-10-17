import { ContentLoader } from '../ContentLoader'

export const Loader = () => {
  return (
    <ContentLoader>
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-35 w-full rounded-lg bg-orange-100"></div>
        <div className="h-35 w-full rounded-lg bg-orange-100"></div>
        <div className="h-35 w-full rounded-lg bg-orange-100"></div>
      </div>
    </ContentLoader>
  )
}
