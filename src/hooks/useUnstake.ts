import { useCallback } from 'react'

import useTaco from './useTaco'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../taco/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const Taco = useTaco()
  const masterChefContract = getMasterChefContract(Taco)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, Taco],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
