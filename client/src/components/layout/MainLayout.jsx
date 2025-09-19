import { ReactNode } from "react"

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">LUCT Reporting App</h1>
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>

      <footer className="bg-white shadow p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LUCT Reporting App
      </footer>
    </div>
  )
}

