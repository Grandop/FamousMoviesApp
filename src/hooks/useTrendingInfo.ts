import { useContext } from "react"
import { TrendingInfosContext } from "../contexts/TrendingInfos"

export const useTrendingInfo = () => {
  const context = useContext(TrendingInfosContext)
  return context
}