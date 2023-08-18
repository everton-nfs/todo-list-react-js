import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { auth } from "../services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Loading } from "../components/Loding";
import { Notification } from "../components/Notification";

export function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignOut = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
  }


  return (
    <div className="flex items-center min-h-screen p-4 lg:justify-center">
      <div
        className="w-full flex flex-col overflow-hidden bg-white shadow-lg max md:flex-row md:flex-1 max-w-screen-md"
      >
        <div
          className="bg-[#30d89b] p-5 md:w-[22rem] md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="lg:text-7xl md:text-5xl text-4xl flex flex-row items-center justify-center h-full">
            <h1 className="font-light text-[#762b94]">
              To.
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-white">D</h1>
              <div
                className={`bg-transparent rounded-full w-[1.7rem] h-[1.7rem] md:w-[2.1rem] md:h-[2.1rem] lg:w-12 lg:h-12 bg-white flex justify-center items-center text-4xl pr-[2px]`}
              >
                <BsCheckLg color="#30d89b" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative">

          { user && <Notification type="Success" message="Cadastro realizado com sucesso!" navigation="/"/> }
          { error && <Notification type="Error" message="Algo errado no cadastramento!"/> }

          <div className="py-[4.5rem] lg:py-[4.5rem] bg-white flex justify-center items-center">
            <form action="#" className="flex flex-col space-y-5 px-8 lg:px-16">
              <h3 className="mb-4 text-2xl font-semibold text-[gray-700]">Cadastro</h3>
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-500">Email</label>
                <input
                  type="email"
                  id="email"
                  autoFocus
                  className={`px-4 py-2 transition duration-300 text-black bg-gray-25 border-2 border-gray-25 focus:border-[#762b94] focus:outline-none placeholder:text-gray-30 text-base`}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-500">Senha</label>
                </div>
                <input
                  type="password"
                  id="password"
                  className={`px-4 py-2 transition duration-300 text-black bg-gray-25 border-2 border-gray-25 focus:border-[#762b94] focus:outline-none placeholder:text-gray-30 text-base`}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={handleSignOut}
                  type="submit"
                  className="w-full h-[2.75rem] px-4 py-2 text-lg font-medium text-white transition-colors duration-300 bg-[#762b94]  shadow hover:bg-[#5d2674] focus:outline-none flex justify-center items-center"
                >
                  { loading ? <Loading/> : "Cadastrar"}
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <p className="text-sm font-medium text-gray-500 whitespace-normal">Você já tem uma conta?
                  <Link to="/" className="text-[#762b94]"> Acesse sua conta aqui</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}