import { useCallback } from 'react'

import useTaco from './useTaco'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../taco/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const Taco = useTaco()
  const masterChefContract = getMasterChefContract(Taco)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, Taco])

  return { onReward: handleReward }
}

export default useReward
