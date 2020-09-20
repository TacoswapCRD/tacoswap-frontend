import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../taco/utils'
import useTaco from './useTaco'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const Taco = useTaco()
  const masterChefContract = getMasterChefContract(Taco)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, Taco])

  useEffect(() => {
    if (account && Taco) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, Taco])

  return balance
}

export default useStakedBalance
