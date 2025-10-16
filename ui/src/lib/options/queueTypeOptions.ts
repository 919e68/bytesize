import { WalletQueueTypeEnum } from '~/graphql/generated/graphql'

export const queueTypeOptions = () => {
  return Object.keys(WalletQueueTypeEnum).map((key) => ({
    id: WalletQueueTypeEnum[key as keyof typeof WalletQueueTypeEnum],
    text: key,
    value: WalletQueueTypeEnum[key as keyof typeof WalletQueueTypeEnum]
  }))
}
