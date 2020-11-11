import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Taco } from '../../taco'

export interface TacoContext {
  taco?: typeof Taco
}

export const Context = createContext<TacoContext>({
  taco: undefined,
})

declare global {
  interface Window {
    tacosauce: any
  }
}

const TacoProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [taco, setTaco] = useState<any>()

  // // @ts-ignore
  // window.Taco = Taco
  // // @ts-ignore
  // window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)

      const tacoLib = new Taco(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setTaco(tacoLib)
      window.tacosauce = tacoLib
    }
  }, [ethereum])

  return <Context.Provider value={{ taco }}>{children}</Context.Provider>
}

export default TacoProvider
