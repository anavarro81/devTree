import { Outlet } from "react-router-dom"
import { Toaster} from 'sonner'


const AuthLayout = () => {
  return (
    <>
        <div className="bg-slate-800 min-h-screen">
        <div className="max-w-lg mx-auto pt-10 px-5">
            <img src="/logo.svg" alt="Logotipo DevTree" />
            <div className="py-10">
                <Outlet/>
            </div>
        </div>
      </div>
      {/* Indicamos donde se mostrar el mensaje para el usuario */}
      <Toaster/>
    </>
  )
}

export default AuthLayout