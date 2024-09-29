export default function Login() {
  return (
    <div>
      <div className="max-w-sm ring-4 ring-teal-500 px-6 py-6 mx-auto mt-10 rounded-lg">
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">Username/Email</label>
            <input type="text" className="rounded py-2 mt-2 p-2 bg-gray-300" />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="rounded py-2 mt-2 p-2 bg-gray-300"
            />
          </div>
          <button className="bg-blue-300 px-3 py-2 mt-5 rounded-md">
            Login
          </button>
          <h6 className="mt-5">
            Don't have an account
            <span className="text-blue-900 hover:underline">Login</span>
          </h6>
        </form>
      </div>
    </div>
  );
}