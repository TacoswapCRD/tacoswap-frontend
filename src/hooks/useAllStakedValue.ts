import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../taco/utils'
import useTaco from './useTaco'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const Taco = useTaco()
  const farms = getFarms(Taco)
  const masterChefContract = getMasterChefContract(Taco)
  const wethContact = getWethContract(Taco)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          price,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          price?: Number,
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
            price,
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, Taco])

  useEffect(() => {
    if (account && masterChefContract && Taco) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, Taco])

  return balances
}

export default useAllStakedValue
