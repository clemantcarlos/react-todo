import type { ReactNode } from "react"
import type { Status } from "../../types/status"
// ICONS
import { Document } from "../icons/Document"
import { DocumentCheck } from "../icons/DocumentCheck"
import { DocumentChart } from "../icons/DocumentChart"


const categories: Record<Status, () => ReactNode> = {
  done: () => <DocumentCheck className = "w-full text-green-400 p-3 bg-green-100 border border-green-400 rounded-full"/>,
  todo: () => <Document className = "w-full text-rose-600 p-3 bg-rose-100 border border-rose-600 rounded-full"/>,
  progress: () => <DocumentChart className = "w-full text-yellow-600 p-3 bg-yellow-50 border border-yellow-600 rounded-full"/>
}

function Category({type}:{type: Status}) {
  return (
    <button className="w-full h-30 bg-stone-50 rounded-full px-5">
      { categories[type]() }
      <span className="text-xs capitalize">{type}</span>
    </button>
  )
}

export default Category