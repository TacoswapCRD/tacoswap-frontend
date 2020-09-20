import { useCallback } from 'react'

import useTaco from './useTaco'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../taco/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const Taco = useTaco()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(Taco),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, Taco],
  )

  return { onStake: handleStake }
}

export default useStake
