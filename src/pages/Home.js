import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

const sliderImages = [
    'https://picsum.photos/1024/512?random=1',
    'https://picsum.photos/1024/512?random=2',
    'https://picsum.photos/1024/512?random=3',
    'https://picsum.photos/1024/512?random=4'
];
const tutorials = [
    { id: 1, title: 'HTML Asoslari', image: 'https://picsum.photos/200/300?random=1', description: 'HTML ning asosiy tushunchalarini o\'rganing.' },
    { id: 2, title: 'CSS Animatsiyalari', image: 'https://picsum.photos/200/300?random=2', description: 'CSS animatsiyalari bilan ishlashni o\'rganing.' },
    { id: 3, title: 'JavaScript Asoslari', image: 'https://picsum.photos/200/300?random=3', description: 'JavaScript asoslarini tushuning.' },
    { id: 4, title: 'React Kirish', image: 'https://picsum.photos/200/300?random=4', description: 'React bilan ishlashni boshlang.' },
    { id: 5, title: 'Advanced SCSS', image: 'https://picsum.photos/200/300?random=5', description: 'SCSS ko\'nikmalaringizni yangi darajaga olib chiqing.' },
    { id: 6, title: 'Node.js Asoslari', image: 'https://picsum.photos/200/300?random=6', description: 'Node.js bilan tanishing.' },
    { id: 7, title: 'Responsive Dizayn', image: 'https://picsum.photos/200/300?random=7', description: 'Responsive veb-saytlar yaratishni o\'rganing.' },
    { id: 8, title: 'Webpack Konfiguratsiyasi', image: 'https://picsum.photos/200/300?random=8', description: 'Webpack ni sozlashni tushuning.' },
    { id: 9, title: 'TypeScript Qo\'llanmasi', image: 'https://picsum.photos/200/300?random=9', description: 'TypeScript asoslarini o\'rganing.' },
    { id: 10, title: 'Matematika Asoslari', image: 'https://picsum.photos/200/300?random=10', description: 'Matematikaning asosiy tushunchalarini o\'rganing.' },
    { id: 11, title: 'Advanced Matematika', image: 'https://picsum.photos/200/300?random=11', description: 'Murakkab matematika mavzularini o\'rganing.' },
    { id: 12, title: 'Adabiyot 101', image: 'https://picsum.photos/200/300?random=12', description: 'Klassik adabiyotga kirish.' },
    { id: 13, title: 'Advanced Adabiyot', image: 'https://picsum.photos/200/300?random=13', description: 'Murakkab adabiyot mavzularini o\'rganing.' },
    { id: 14, title: 'Biologiya Asoslari', image: 'https://picsum.photos/200/300?random=14', description: 'Biologiyaning asosiy tushunchalarini o\'rganing.' },
    { id: 15, title: 'Advanced Biologiya', image: 'https://picsum.photos/200/300?random=15', description: 'Murakkab biologiya mavzularini o\'rganing.' },
    { id: 16, title: 'Fizika Boshlang\'ich', image: 'https://picsum.photos/200/300?random=16', description: 'Fizika asoslarini o\'rganing.' },
    { id: 17, title: 'Advanced Fizika', image: 'https://picsum.photos/200/300?random=17', description: 'Murakkab fizika mavzularini o\'rganing.' },
    { id: 18, title: 'Kimyo Asoslari', image: 'https://picsum.photos/200/300?random=18', description: 'Kimyoning asosiy tushunchalarini o\'rganing.' },
    { id: 19, title: 'Advanced Kimyo', image: 'https://picsum.photos/200/300?random=19', description: 'Murakkab kimyo mavzularini o\'rganing.' },
    { id: 20, title: 'Tarix 101', image: 'https://picsum.photos/200/300?random=20', description: 'Muhim tarixiy voqealar haqida o\'rganing.' },
    { id: 21, title: 'Advanced Tarix', image: 'https://picsum.photos/200/300?random=21', description: 'Chuqur tarixiy tahlilni o\'rganing.' },
    { id: 22, title: 'Falsafa Asoslari', image: 'https://picsum.photos/200/300?random=22', description: 'Falsafa asoslarini o\'rganing.' },
    { id: 23, title: 'Advanced Falsafa', image: 'https://picsum.photos/200/300?random=23', description: 'Murakkab falsafa mavzularini o\'rganing.' },
    { id: 24, title: 'San\'at Tarixi', image: 'https://picsum.photos/200/300?random=24', description: 'San\'at tarixini o\'rganing.' },
    { id: 25, title: 'Musiqa Nazariyasi', image: 'https://picsum.photos/200/300?random=25', description: 'Musiqa nazariyasiga kirish.' }
];

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleTutorials, setVisibleTutorials] = useState(12);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleCardClick = (id) => {
        navigate(`/course/${id}`);
    };

    const handleShowMore = () => {
        setVisibleTutorials((prev) => prev + 10);
    };

    return (
        <div className="home-container">
            <h1 className="page-title">Home</h1>

            {/* Carousel */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                <div className="absolute w-full h-full bg-cover" style={{ backgroundImage: `url(${sliderImages[currentSlide]})` }}></div>
                <button onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)} className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 px-4 py-2 bg-white/30 rounded-full">
                    &#8249;
                </button>
                <button onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)} className="absolute top-1/2 right-0 z-30 transform -translate-y-1/2 px-4 py-2 bg-white/30 rounded-full">
                    &#8250;
                </button>
            </div>

            {/* Tutorials Cards */}
            <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {tutorials.slice(0, visibleTutorials).map((tutorial) => (
                    <div key={tutorial.id} className="card cursor-pointer transition-all hover:scale-105 duration-200 ease-in-out" onClick={() => handleCardClick(tutorial.id)}>
                        <img src={tutorial.image} alt={tutorial.title} className="card-image w-full h-48 object-cover rounded-lg" />
                        <div className="card-body p-4">
                            <h3 className="card-title font-semibold text-lg">{tutorial.title}</h3>
                            <p className="card-description text-gray-600">{tutorial.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {visibleTutorials < tutorials.length && (
                <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={handleShowMore}>
                    Show More
                </button>
            )}
        </div>
    );
};

export default HomePage;