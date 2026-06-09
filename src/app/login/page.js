"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে আপনার লগইন লজিক হ্যান্ডেল করতে পারবেন
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#fdf4f2] via-[#fff5f5] to-[#fed7aa] p-4 sm:p-6 lg:p-8">

            {/* মেইন কার্ড কন্টেইনার */}
            <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl">

                {/* ব্র্যান্ড লোগো ও হেডার */}
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-extrabold text-gray-800 tracking-tight">
                        Butter<span className="text-[#a84c38]">Beans</span>Bakery
                    </Link>
                    <h2 className="text-xl font-semibold text-gray-700 mt-3">Welcome Back!</h2>
                    <p className="text-sm text-gray-500 mt-1">Please log in to your account</p>
                </div>

                {/* লগইন ফর্ম */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* ইমেইল ইনপুট */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-600 block">Email Address</label>
                        <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@mail.com"
                                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a84c38]/20 focus:border-[#a84c38] transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* পাসওয়ার্ড ইনপুট */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-600">Password</label>
                            <Link href="/forgot-password" className="text-xs font-medium text-[#a84c38] hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FiLock className="w-5 h-5" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a84c38]/20 focus:border-[#a84c38] transition-all text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* রিমেম্বার মি চেকবক্স */}
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-[#a84c38] focus:ring-[#a84c38] border-gray-300 rounded-md cursor-pointer accent-[#a84c38]"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-500 cursor-pointer select-none">
                            Remember me on this device
                        </label>
                    </div>

                    {/* সাইন ইন বাটন */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#a84c38] to-[#c25942] text-white font-medium rounded-xl shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a84c38] transition-all text-sm font-semibold tracking-wide mt-2"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white/90 px-3 text-gray-400 font-medium">Or continue with</span>
                    </div>
                </div>

                {/* সোশ্যাল লগইন বাটনসমূহ */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center space-x-2 py-2.5 px-4 border border-gray-200 bg-white/50 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium text-gray-600">
                        <FcGoogle className="w-5 h-5" />
                        <span>Google</span>
                    </button>

                    <button className="flex items-center justify-center space-x-2 py-2.5 px-4 border border-gray-200 bg-white/50 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium text-gray-600">
                        <FaFacebookF className="w-4 h-4 text-[#1877F2]" />
                        <span>Facebook</span>
                    </button>
                </div>

                {/* রেজিস্টার লিংক */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-semibold text-[#a84c38] hover:underline ml-1">
                            Sign up now
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}