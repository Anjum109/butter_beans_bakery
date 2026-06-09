"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// আপনার ইমেজের পাথ অনুযায়ী ইম্পোর্ট (যদি src ফোল্ডারে থাকে)
import bannerImg from "../../assets/bannerimage/banner.png";

export default function HeroBanner() {
    return (
        <div className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">

            {/* ১. ব্যাকগ্রাউন্ড ইমেজ (Next.js Image Component) */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={bannerImg}
                    alt="Bakery Banner"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* নিচের এই div-টি ইমেজটিকে হালকা কালো (Overlay) করবে। 
                  প্রয়োজন অনুযায়ী bg-black/40 পরিবর্তন করে bg-black/50 বা bg-black/60 করতে পারেন।
                */}
                <div className="absolute inset-0 bg-black/45 mix-blend-multiply"></div>
            </div>

            {/* ২. বাম ও ডান পাশের স্লাইডার অ্যারো (Navigation Arrows) */}
            <button className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white transition focus:outline-none">
                <FiChevronLeft className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
            </button>

            <button className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white transition focus:outline-none">
                <FiChevronRight className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
            </button>

            {/* ৩. মাঝখানের কন্টেন্ট (Text & Button) */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">

                {/* মেইন টাইটেল */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-md">
                    Sweetness Overloaded
                </h1>

                {/* সাবটাইটেল / বিবরণ */}
                <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl font-light leading-relaxed tracking-wide drop-shadow-sm">
                    We know how large objects will act, but things on a <br className="hidden sm:inline" />
                    small scale just do not act that way.
                </p>

                {/* অ্যাকশন বাটন */}
                <button className="mt-8 px-8 py-3 bg-[#a84c38] hover:bg-[#913f2e] text-white text-sm font-semibold rounded-md shadow-lg transition-all duration-300 tracking-wider uppercase">
                    Start Now
                </button>

            </div>

            {/* ৪. নিচের মাঝখানের স্লাইডার ইন্ডিকেটর বার (Bottom Indicator) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-24 h-[3px] bg-white/30 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-white rounded-full"></div>
            </div>

        </div>
    );
}