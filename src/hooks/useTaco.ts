import { useContext } from 'react'
import { Context } from '../contexts/TacoProvider'

const useTaco = () => {
  const { taco } = useContext(Context)
  return taco
}

export default useTaco
