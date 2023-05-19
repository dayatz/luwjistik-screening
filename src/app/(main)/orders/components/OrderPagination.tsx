import { cn } from "~/lib/utils"

const pages = 5

export default function OrderPagination() {
  return (
    <ul className="flex gap-2">
      {Array.from(Array(pages).keys()).map(a => (
        <li key={a} className={cn("shadow-sm p-2 rounded-md border border-slate-200 h-10 w-10 grid place-items-center",
          a === 0 ? "bg-[var(--primary-color)] text-gray-100" : "bg-white text-slate-500 hover:cursor-pointer hover:bg-slate-100")}>{a + 1}</li>
      ))}
    </ul>
  )
}
