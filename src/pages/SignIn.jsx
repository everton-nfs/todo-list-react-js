import { BsCheckLg } from "react-icons/bs";

export function SignIn() {
  return (
    <div className="flex items-center min-h-screen p-4 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="bg-[#30d89b] p-5 md:flex-1"
        >
          <div className="text-7xl flex flex-row items-center justify-center h-full">
            <h1 className="font-light text-[#762b94]">
              To.
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-white">D</h1>
              <div
                className={`bg-transparent rounded-full w-[3rem] h-[3rem] bg-white flex justify-center items-center text-4xl pr-[2px]`}
              >
                <BsCheckLg color="#30d89b"/>
              </div>
            </div>
          </div>
        </div>
        <div className="px-14 py-20 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-[gray-700]">Login</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-500">Email</label>
              <input
                type="email"
                id="email"
                autoFocus
                className={`px-4 py-2 transition duration-300 text-black bg-gray-25 border border-gray-25 focus:border-[#762b94] focus:outline-none placeholder:text-gray-30 text-base`}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-500">Senha</label>
              </div>
              <input
                type="password"
                id="password"
                className={`px-4 py-2 transition duration-300 text-black bg-gray-25 border border-gray-25 focus:border-[#762b94] focus:outline-none placeholder:text-gray-30 text-base`}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-medium text-white transition-colors duration-300 bg-[#762b94]  shadow hover:bg-[#5d2674] focus:outline-none"
              >
                Entrar
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <p className="text-sm font-medium text-gray-500">Não tem uma conta? <a href="#" className="text-[#762b94]">Cadastre-se</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}