import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useTaco from '../../hooks/useTaco'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../taco/utils'
import { getFarms } from '../../taco/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const Taco = useTaco()
  const { account } = useWallet()

  const farms = getFarms(Taco)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
