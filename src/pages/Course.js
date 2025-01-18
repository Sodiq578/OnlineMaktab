import React from 'react';
import { useParams } from 'react-router-dom';

// Video tutorials with categories
const tutorials = [
    {
        id: 1,
        title: 'HTML Asoslari',
        category: 'Dasturlash',
        videos: [
            'https://www.youtube.com/embed/9dUhZq9dkHM',
            'https://www.youtube.com/embed/E9OKpacyUSc',
            'https://www.youtube.com/embed/_j7yneg6if0',
            'https://www.youtube.com/embed/M6AS_IdZK7s'
        ]
    },
    {
        id: 2,
        title: 'CSS Animatsiyalari',
        category: 'Dasturlash',
        videos: [
            'https://www.youtube.com/embed/Kzj00h6k1zM',
            'https://www.youtube.com/embed/UwcdDgR5YYM'
        ]
    },
    {
        id: 3,
        title: 'JavaScript Asoslari',
        category: 'Dasturlash',
        videos: [
            'https://www.youtube.com/embed/N8Vf1t0-ptA',
            'https://www.youtube.com/embed/Fh7AehkjD2A'
        ]
    },
    {
        id: 4,
        title: 'React Kirish',
        category: 'Dasturlash',
        videos: [
            'https://www.youtube.com/embed/8nLkTjtUQyk',
            'https://www.youtube.com/embed/ScBhpPj4o1I'
        ]
    },
    // You can add more categories and tutorials here
];

const Course = () => {
    // Get category from URL
    const { category } = useParams();

    // Filter tutorials by the category
    const filteredTutorial = tutorials.filter(tutorial => tutorial.category === category);

    return (
        <div className="course-container">
            <h1>{category} Kategoriyasi</h1>
            <div className="tutorials-list">
                {filteredTutorial.length > 0 ? (
                    filteredTutorial.map(tutorial => (
                        <div key={tutorial.id} className="tutorial-card">
                            <h3>{tutorial.title}</h3>
                            <div className="video-list">
                                {tutorial.videos.map((video, index) => (
                                    <iframe
                                        key={index}
                                        width="560"
                                        height="315"
                                        src={video}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Bu kategoriyada darsliklar topilmadi.</p>
                )}
            </div>
        </div>
    );
};

export default Course;
