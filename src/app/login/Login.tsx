export default function Login () {
    return (
        <div className="flex-row-reverse lg:flex items-center justify-center">
            <div className="bg-white text-black h-screen lg:w-2/3">
                <div className="pt-5 text-3xl font-bold mx-5 p-5">Welcome to Cannine Connect</div>
                <form className="max-w-sm mx-auto">
                    <div className=" font-light my-5 flex-start">Login to your account</div>
                <div className="mb-5">
                    <label htmlFor="email" className="block my-3 text-sm font-medium text-gray-900 dark:text-black flex-start">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <label htmlFor="forget password" className="ms-2 text-sm font-medium text-black-900">Forgot password?</label>
                </div>
                <button type="submit" className="text-white mb-5 pb-5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button>
                <div className="mb-5 text-sm">Don't have an account? <a className="font-medium" href="">Register</a></div>
                </form>
            </div>

            <div className="lg:w-1/3 bg-grey m-5 h-screen text-center items-center align-center">
                <div className="p-5 text-3xl font-bold mx-5">
                    Jerskits.
                </div>
                <div>
                    <img className="content-center m-5 p-5" width="10%" src="https://banner2.cleanpng.com/20190504/blc/kisspng-scalable-vector-graphics-encapsulated-postscript-c-leaf-png-icon-18-png-repo-free-png-icons-5ccdc273b52358.445843551556988531742.jpg" alt="logo" />
                    Best quality materials
                </div>
            </div>
        </div>
    )
}