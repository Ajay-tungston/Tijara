
export default function Login() {
    return (
      <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-[Nunito]"
              style={{ backgroundImage: "url('Frame 712.png')" }}
      >
        <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          {/* Logo Image Instead of Title */}
          <div className="flex justify-center mb-4">
            <img
              src="/image 6.png"
              alt="tijara logo"
              className="h-12 object-contain"
            />
          </div>
  
          <p className="text-center text-gray-600 mb-8 text-sm">
  Log in to manage your fresh<br />produce effortlessly
</p>
  
          {/* Username */}
          <div className="mb-4">
            <label className="block text-black font-semibold mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
            />
          </div>
  
          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-black font-semibold">Password</label>
              <a href="#" className="text-[#B3DB48] text-sm hover:underline">
                Forgot password
              </a>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
            />
          </div>
  
          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-black">
              Remember me
            </label>
          </div>
  
          {/* Login Button */}
          <button className="w-full bg-[#B3DB48]  text-white py-2 rounded-md font-semibold">
            Log in
          </button>
        </div>
      </div>
    );
  }
  