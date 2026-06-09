"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai"; // ইমেজ অনুযায়ী ইউজার আইকনের জন্য

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">


                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-[#1e293b] tracking-tight">
                            Butter Beans Bakery
                        </Link>
                    </div>

                    {/* ২. মেইন মেনু এবং লগইন বাটন (ঠিক মাঝখানে এবং ইমেজের মতো অর্ডারে) */}
                    <div className="hidden md:flex items-center space-x-7 text-[15px] text-[#8e8e8e]">
                        <Link href="/" className="text-[#8e8e8e] hover:text-black transition">
                            Home
                        </Link>

                        <div className="relative group">
                            <button className="flex items-center space-x-1 hover:text-black transition py-2">
                                <span>Shop</span>
                                <FiChevronDown className="w-3.5 h-3.5 text-[#8e8e8e]" />
                            </button>
                            {/* Dropdown item */}
                            <div className="absolute left-0 mt-0 w-40 bg-white border border-gray-100 rounded-md shadow-lg hidden group-hover:block z-50">
                                <Link href="/shop/biscuits" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Biscuits</Link>
                            </div>
                        </div>

                        <Link href="/about" className="hover:text-black transition">About</Link>
                        <Link href="/blog" className="hover:text-black transition">Blog</Link>
                        <Link href="/contact" className="hover:text-black transition">Contact</Link>
                        <Link href="/pages" className="hover:text-black transition">Pages</Link>

                        {/* ইমেজ অনুযায়ী মেনুর ঠিক পরেই Login / Register লিংক (গাঢ় লাল/খয়েরী রঙে) */}
                        <Link href="/login" className="flex items-center space-x-1.5 text-[#a84c38] font-medium pl-6 hover:opacity-80 transition">
                            <AiOutlineUser className="w-[18px] h-[18px]" />
                            <span>Login / Register</span>
                        </Link>
                    </div>

                    {/* ৩. একদম ডানদিকের অ্যাকশন আইকনসমূহ */}
                    <div className="hidden md:flex items-center space-x-5 text-[#8e8e8e]">
                        <button className="hover:text-black transition">
                            <FiSearch className="w-[18px] h-[18px] stroke-[2.5]" />
                        </button>

                        <Link href="/cart" className="relative hover:text-black transition flex items-center">
                            <FiShoppingCart className="w-[18px] h-[18px] stroke-[2.5]" />
                            <span className="ml-1 text-[13px] text-[#8e8e8e]">1</span>
                        </Link>

                        <Link href="/wishlist" className="relative hover:text-black transition flex items-center">
                            <FiHeart className="w-[18px] h-[18px] stroke-[2.5]" />
                            <span className="ml-1 text-[13px] text-[#8e8e8e]">1</span>
                        </Link>
                    </div>

                    {/* ৪. মোবাইল রেসপনসিভ বাটন */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-black focus:outline-none"
                        >
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* ৫. মোবাইল ড্রপডাউন মেনু */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-md">
                    <Link href="/" className="block text-gray-800 py-2">Home</Link>
                    <Link href="/shop" className="block text-gray-600 py-2">Shop</Link>
                    <Link href="/about" className="block text-gray-600 py-2">About</Link>
                    <Link href="/blog" className="block text-gray-600 py-2">Blog</Link>
                    <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
                    <Link href="/pages" className="block text-gray-600 py-2">Pages</Link>

                    <hr className="border-gray-100 my-2" />

                    <div className="flex flex-col space-y-4 pt-2">
                        <Link href="/login" className="flex items-center space-x-1.5 text-[#a84c38] font-medium">
                            <AiOutlineUser className="w-[18px] h-[18px]" />
                            <span>Login / Register</span>
                        </Link>

                        <div className="flex space-x-6 text-[#8e8e8e] pt-2">
                            <FiSearch className="w-5 h-5" />
                            <Link href="/cart" className="flex items-center">
                                <FiShoppingCart className="w-5 h-5" />
                                <span className="ml-1 text-sm">1</span>
                            </Link>
                            <Link href="/wishlist" className="flex items-center">
                                <FiHeart className="w-5 h-5" />
                                <span className="ml-1 text-sm">1</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}