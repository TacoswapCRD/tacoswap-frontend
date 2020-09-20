import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../taco/utils'
import useTaco from './useTaco'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const Taco = useTaco()
  const masterChefContract = getMasterChefContract(Taco)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, Taco])

  useEffect(() => {
    if (account && masterChefContract && Taco) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, Taco])

  return balance
}

export default useEarnings
