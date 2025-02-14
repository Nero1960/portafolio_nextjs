
export default function MessageError({children} : {children: React.ReactNode}) {
  return (
    <div className="text-red-500 text-xs font-medium w-full">{children}</div>
  )
}
