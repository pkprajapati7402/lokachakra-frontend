// pages/signup.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';

const roles = [
    "Founder",
    "Investor",
    "Mentor",
    "Service Provider"
];

export default function Auth() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('');
    const [roleType, setRoleType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Add these two states for step 9 password visibility
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Common Left Side Component
    function AuthLeftSide() {
        return (
            <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen">
                {/* Logo */}
                <div className="flex items-center w-full mb-8">
                    <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                    <span className="ml-2 text-lg font-semibold text-gray-700">Lokachakra</span>
                </div>

                {/* Image Placeholder */}
                <div className="flex-grow flex items-center justify-center my-8">
                    <div className="w-72 h-72 sm:w-80 sm:h-80 border border-gray-400 rounded-md flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image Placeholder</span>
                    </div>
                </div>

                {/* Description */}
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-gray-700">LOREM IPSUM IS TEXT</h2>
                <p className="text-sm sm:text-base text-center text-gray-600 max-w-md mt-3 px-4">
                    Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is
                </p>
            </div>
        );
    }

    return (
    <>
    <Navbar />
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
            {step === 1 && (
                <div className="w-full max-w-6xl p-6 flex flex-col items-center">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-8">CHOOSE YOUR CATEGORY</h1>
                    <div className="flex flex-wrap justify-center gap-8 mb-10">
                        {roles.map((r) => (
                            <div
                                key={r}
                                className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 ${role === r ? 'text-black font-semibold' : 'text-gray-700'}`}
                                onClick={() => setRole(r)}
                            >
                                <div className="w-28 h-28 border-4 border-gray-300 rounded-full flex items-center justify-center mb-3">
                                    <Image src="/avatar.png" alt={r} width={64} height={64} className="rounded-full" />
                                </div>
                                <div className="text-lg uppercase tracking-wide">{r}</div>
                                <p className="text-sm text-center text-gray-500 mt-1 max-w-[150px]">Lorem Ipsum is simply dummy text of the printing typesetting is</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition disabled:opacity-50"
                        disabled={!role}
                        onClick={() => setStep(2)}
                    >
                        CONTINUE
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        YOU AGREE TO OUR <span className="underline cursor-pointer">PRIVACY POLICY</span> & <span className="underline cursor-pointer">TERMS & CONDITION</span>
                    </p>
                </div>
            )}

            {step === 2 && (
                <div className="w-full min-h-screen flex flex-col md:flex-row pt-0 pb-0 px-4">
                    
                    <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen">
                        {/* Logo */}
                        <div className="flex items-center w-full mb-8">
                            <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                            <span className="ml-2 text-lg font-semibold text-gray-700">Lokachakra</span>
                        </div>

                        {/* Image Placeholder */}
                        <div className="flex-grow flex items-center justify-center my-8">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 border border-gray-400 rounded-md flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Image Placeholder</span>
                            </div>
                        </div>

                        {/* Description */}
                        <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-gray-700">LOREM IPSUM IS TEXT</h2>
                        <p className="text-sm sm:text-base text-center text-gray-600 max-w-md mt-3 px-4">
                            Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is
                        </p>
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                        <div className="text-center mb-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                            <p className="text-sm text-gray-600">You have already account? Hit the sign in button</p>
                            <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                    onClick={() => setStep(6)}
                                >
                                    Sign In</button>
                            </div>
                        </div>

                        <p className="text-center text-base font-semibold mb-2">Categorize founders based on startup knowledge.</p>
                        <hr className="w-2/3 border-t border-gray-300 mb-6" />

                        {/* Questions */}
                        <div className="w-full max-w-md space-y-6">
                            {[
                                'Have you launched a startup before?',
                                'Are you familiar with product-market fit, MVP, and fundraising?',
                                'What stage is your current idea/startup in?'
                            ].map((question, idx) => (
                                <div key={idx} className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
                                    <p className="text-center text-base font-semibold text-gray-800 mb-4">{question}</p>
                                    <div className="flex justify-center gap-6 flex-wrap">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <input type="radio" name={`q${idx}`} className="accent-gray-800 w-4 h-4" /> Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <input type="radio" name={`q${idx}`} className="accent-gray-800 w-4 h-4" /> No
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm"
                            disabled={!role}
                            onClick={() => setStep(3)}
                        >
                            NEXT
                        </button>

                        <label className="flex items-center gap-2 text-xs text-gray-700 mt-4 text-center">
                            <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                        </label>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="w-full min-h-screen flex flex-col md:flex-row">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8">
                        <div className="text-center mb-4 px-2">
                            <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                            <p className="text-sm text-gray-600">
                                You have already account? Hit the sign in button
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-3">
                                <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm" onClick={() => setStep(6)}>Sign In</button>
                            </div>
                        </div>

                        <p className="text-center text-base sm:text-lg font-semibold mb-2">Categorize by role type.</p>
                        <hr className="w-2/3 border-t border-gray-300 mb-6" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md px-2">
                            {["Zero Knowledge", "Knowledgeable"].map((type) => (
                                <div
                                    key={type}
                                    className={`rounded-lg border p-4 text-center cursor-pointer transition-all duration-200 shadow-sm ${roleType === type
                                        ? "bg-blue-100 border-blue-500 text-gray-800"
                                        : "bg-gray-50 border-gray-300 text-gray-700"
                                        }`}
                                    onClick={() => setRoleType(type)}
                                >
                                    <div className="w-12 h-12 mx-auto rounded-full border border-gray-400 mb-2 overflow-hidden">
                                        <img src="/avatar.png" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="font-semibold text-sm mb-1">{type} {role}</p>
                                    <button
                                        className={`text-xs px-3 py-1 rounded-full border ${roleType === type
                                            ? "border-blue-500 text-blue-600 bg-white"
                                            : "border-gray-400 text-gray-600 bg-white"
                                            }`}
                                    >
                                        Select
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm"
                            disabled={!roleType}
                            onClick={() => setStep(4)}
                        >
                            NEXT
                        </button>

                        <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 mt-4 px-2 text-center">
                            <input type="checkbox" className="accent-gray-700" /> I agree to our{" "}
                            <span className="underline">PRIVACY POLICY</span> &{" "}
                            <span className="underline">TERMS & CONDITION</span>
                        </label>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold">SIGN UP</h2>
                            <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                            <div className="flex flex-wrap gap-4 justify-center mt-3">
                                <button className="px-6 py-2 rounded-full bg-gray-700 text-white">Sign Up</button>
                                <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800" onClick={() => setStep(6)}>Sign In</button>
                            </div>
                        </div>

                        <p className="text-center text-lg font-semibold mb-2">Documentation and Basic Details</p>
                        <hr className="w-2/3 border-t border-gray-300 mb-6" />

                        <div className="space-y-10 w-full">
                            {/* BASIC DETAILS */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-6">BASIC DETAIL</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name*</label>
                                        <input type="text" placeholder="Full Name*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Email ID */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                        <input type="email" placeholder="Email*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number*</label>
                                        <input type="text" placeholder="Phone Number*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Profile Photo */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Profile Photo*</label>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                            <input type="file" className="hidden" id="profileUpload" />
                                            <label htmlFor="profileUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password*"
                                                className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="focus:outline-none ml-2"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {showPassword ? (
                                                        // Eye Off Icon
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                        />
                                                    ) : (
                                                        // Eye Icon
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                                        />
                                                    )}
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="mt-4">
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password*</label>
                                        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
                                            <input
                                                type={showConfirm ? 'text' : 'password'}
                                                placeholder="Confirm Password*"
                                                className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm((prev) => !prev)}
                                                className="focus:outline-none ml-2"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {showConfirm ? (
                                                        // Eye Off Icon
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                        />
                                                    ) : (
                                                        // Eye Icon
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                                        />
                                                    )}
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-gray-600">Use at least 8 character password including uppercase, lowercase and one special character.</p>
                            </div>

                            {/* ID VERIFICATION SECTION */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-6">ID VERIFICATION</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Aadhar */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Aadhar Card*</label>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                            <input type="file" className="hidden" id="aadharUpload" />
                                            <label htmlFor="aadharUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* PAN */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Upload PAN Card*</label>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                            <input type="file" className="hidden" id="panUpload" />
                                            <label htmlFor="panUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900"
                            disabled={!roleType}
                            onClick={() => setStep(5)}
                        >

                            NEXT
                        </button>

                        <label className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                            <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                        </label>
                    </div>
                </div>
            )}

            {step === 5 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold">SIGN UP</h2>
                            <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                            <div className="flex flex-wrap gap-4 justify-center mt-3">
                                <button className="px-6 py-2 rounded-full bg-gray-700 text-white">Sign Up</button>
                                <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800" onClick={() => setStep(6)}>Sign In</button>
                            </div>
                        </div>

                        <p className="text-center text-lg font-semibold mb-2">Documentation & Basic Details</p>
                        <hr className="w-2/3 border-t border-gray-300 mb-6" />

                        <div className="space-y-10 w-full">
                            {/* Business Detail & ID Verification */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-6">Business Detail & ID Verification</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Business Name */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Business Name*</label>
                                        <input type="text" placeholder="Business Name*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Business Email */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Business Email ID*</label>
                                        <input type="email" placeholder="Email*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Business Stage */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Business Stage*</label>
                                        <select className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                            <option value="">Beginner</option>
                                            <option value="">Intermediate</option>
                                            <option value="">Advanced</option>
                                            {/* Add actual options here */}
                                        </select>
                                    </div>

                                    {/* Industries Stage */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Industries Stage*</label>
                                        <select className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                            {/* Add actual options here */}
                                            <option value="">Beginner</option>
                                            <option value="">Intermediate</option>
                                            <option value="">Advanced</option>
                                        </select>
                                    </div>

                                    {/* Upload Gumasta */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Gumasta*</label>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                            <input type="file" className="hidden" id="gumastaUpload" />
                                            <label htmlFor="gumastaUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* GSTI Number */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">GSTI Number*</label>
                                        <input type="text" placeholder="GSTI Number*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links & Portfolio */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-6">Social Media Links & Portfolio</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* LinkedIn */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">LinkedIn Link* (Optional)</label>
                                        <input type="text" placeholder="LinkedIn Link*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>

                                    {/* Portfolio */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Portfolio Link* (Optional)</label>
                                        <input type="text" placeholder="Portfolio Link*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900"
                            disabled={!roleType}>
                            SIGN UP
                        </button>

                        <label className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                            <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                        </label>
                    </div>
                </div>
            )}

            {step === 6 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold">SIGN IN</h2>
                            <p className="text-sm text-gray-600">You Don’t have an account? Hit the Sign Up button</p>
                            <div className="flex flex-wrap gap-4 justify-center mt-3">
                                <button
                                    className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 bg-gray-200 font-semibold"
                                    onClick={() => setStep(2)}
                                >
                                    Sign Up
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full bg-gray-700 text-white font-semibold"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>

                        <hr className="w-2/3 border-t border-gray-300 my-6" />

                        <div className="space-y-8 w-full max-w-sm mx-auto">
                            {/* Email ID */}
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password*"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                    tabIndex={-1}
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        {showPassword ? (
                                            // Eye Off Icon
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                            />
                                        ) : (
                                            // Eye Icon
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                            />
                                        )}
                                    </svg>
                                </button>

                            </div>

                            {/* Forgot Password */}
                            <div className="text-center" onClick={() => setStep(7)}>
                                <a href="#" className="text-sm text-gray-700 font-semibold underline">Forgot Your Password?</a>
                            </div>

                            {/* Centered Sign In Button */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    disabled={!roleType}
                                >
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            )}

            {step === 7 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold">ENTER REGISTERD EMAIL</h2>
                            <p className="text-sm text-gray-600">We will send your OTP on your email address if we found
                                your account.</p>
                        </div>

                        <hr className="w-2/3 border-t border-gray-300 my-6" />

                        <div className="space-y-8 w-full max-w-sm mx-auto">
                            {/* Email ID */}
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>

                            {/* Centered Sign In Button */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    disabled={!roleType}
                                    onClick={() => setStep(8)}
                                >
                                    SEND OTP
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                    disabled={!roleType}
                                    onClick={() => setStep(6)}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            )}

            {step === 8 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold">ENTER 6 DIGIT OTP</h2>
                            <p className="text-sm text-gray-600">We have sent you 6 Digit OTP  Code on your Register email Address
                                Please Verify the OTP </p>
                        </div>

                        <hr className="w-2/3 border-t border-gray-300 my-6" />

                        <div className="space-y-8 w-full max-w-sm mx-auto">
                            {/* Email ID */}
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Enter OTP*</label>
                                <input
                                    type="text"
                                    placeholder="6 Digit OTP*"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            {/* RESEND OTP */}
                            <div className="text-center" onClick={() => setStep(7)}>
                                <a href="#" className="text-sm text-gray-700 font-semibold underline">Didn't Recived OTP. Resend It</a>
                            </div>

                            {/* Centered Sign In Button */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    disabled={!roleType}
                                    onClick={() => setStep(9)}
                                >
                                    GET OTP
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                    disabled={!roleType}
                                    onClick={() => setStep(6)}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            )}

            {step === 9 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-4xl font-semibold">RESET PASSWORD</h2>
                            <p className="text-sm text-gray-600 mt-2">
                                Set the new password for your account so you can <br />
                                sign in and access all the features
                            </p>
                        </div>

                        <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                        <div className="space-y-8 w-full max-w-sm mx-auto">
                            {/* New Password */}
                            <div className="relative">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">New Password*</label>
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="New Password*"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                    tabIndex={-1}
                                >
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        {showNewPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password*</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password*"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                    tabIndex={-1}
                                >
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        {showConfirmPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Password Instructions */}
                            <p className="text-xs text-gray-600 text-center">
                                Use at least 8 character password included uppercase <br /> lowercase and one special character.
                            </p>

                            {/* Reset Password Button */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    disabled={!roleType}
                                    onClick={() => setStep(10)}
                                >
                                    RESET PASSWORD
                                </button>
                            </div>

                            {/* Cancel Button */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                    disabled={!roleType}
                                    onClick={() => setStep(6)}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 10 && (
                <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                    {/* Left Section */}
                    <AuthLeftSide />

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                        <div className="text-center mb-4">
                            <h2 className="text-4xl font-semibold">CONGRATULATIONS</h2>
                            <p className="text-sm text-gray-600 mt-2">
                                Your password is reset successfully. You can Sign In
                                with your new password
                            </p>
                        </div>

                        <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                        <div className="space-y-8 w-full max-w-sm mx-auto">




                            {/* BACK TO SIGN IN */}
                            <div className="flex justify-center">
                                <button
                                    className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    disabled={!roleType}
                                    onClick={() => setStep(6)}
                                >
                                    BACK TO SIGN-IN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    <ChatBot />
    <Footer />
    </>
    );
}
