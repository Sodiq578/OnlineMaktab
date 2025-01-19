import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate ishlatish
import loginImg from '../assets/images/loginImg.webp'; // Rasmni import qilish

const Login = () => {
    const [step, setStep] = useState(1); // Bosqichni boshqarish
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate(); // Foydalanuvchini marshrut qilish uchun

    const handleNext = () => {
        if (step === 1 && name && phone) {
            setStep(2);
        } else {
            alert('Ismingiz va telefon raqamingizni kiriting!');
        }
    };

    const handleLogin = () => {
        if (step === 2 && code === '1234') { // Kodni tekshirish
            alert('Login muvaffaqiyatli!');
            navigate('/sidebar'); // Dashboard sahifasiga o‘tkazish
        } else {
            alert('Noto‘g‘ri kod!');
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Chap tomondagi login form */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                        {step === 1 ? 'Login' : 'Kodni kiriting'}
                    </h2>
                    {step === 1 && (
                        <>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Ismingiz
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                                    placeholder="Ismingizni kiriting"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Telefon raqamingiz
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                                    placeholder="+998123456789"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={handleNext}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                            >
                                Davom etish
                            </button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div className="mb-4">
                                <label
                                    htmlFor="code"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    SMS kod
                                </label>
                                <input
                                    type="text"
                                    id="code"
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                                    placeholder="Kodni kiriting"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={handleLogin}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* O‘ng tomondagi rasm qismi */}
            <div
                className="flex-1 hidden lg:flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${loginImg})` }}
            >
                <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold">Xush kelibsiz!</h2>
                    <p>Bizning platformamizga kirish uchun ro‘yxatdan o‘ting.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
   