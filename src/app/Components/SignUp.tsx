"use client"
import Link from "next/link"
import React from 'react'
import { useState } from "react"


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
  })
  const { name, email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div>
      <div className="flex-row-reverse lg:flex items-center justify-center">
        <div className="bg-white text-black m-auto h-screen lg:w-2/3">
          <div className="pt-5 text-3xl font-bold m-auto mt-20 p-5">Canine Connect</div>
          <form className="max-w-sm mx-auto">
            <div className=" font-light my-5 flex-start">Create your account</div>
            <div className="mb-5">
              <label htmlFor="name" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Email</label>
              <input 
                type="name" 
                id="name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Name"
                value={name}
                onChange={onChange} 
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Email"
                value={email}
                onChange={onChange} 
                required
              />
            </div>
            <div className="mb-5 ">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input 
                type={showPassword ? 'text' : 'password'}
                id="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
              
              <img 
                src="https://static.thenounproject.com/png/743351-200.png" 
                alt="show password"
                className="w-10"
                onClick={() => setShowPassword((prevState) => !prevState)} 
              />
            </div>
            <button type="submit" className="text-white mb-5 pb-5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
          </form>

          <Link href="/">
            <img 
              src="https://icon2.cleanpng.com/20180920/ur/kisspng-computer-icons-clip-art-vector-graphics-symbol-ima-instagram-home-icon-gallery-5ba3893d645047.4226597815374441574109.jpg" 
              alt="Back to login page" 
              className="w-10 p-1 m-auto"
            />
            <p className="text-center text-xs">Back to login</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp