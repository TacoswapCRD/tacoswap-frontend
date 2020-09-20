import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../taco/utils'
import useTaco from './useTaco'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const Taco = useTaco()
  const farms = getFarms(Taco)
  const masterChefContract = getMasterChefContract(Taco)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, Taco])

  useEffect(() => {
    if (account && masterChefContract && Taco) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, Taco])

  return balances
}

export default useAllEarnings
