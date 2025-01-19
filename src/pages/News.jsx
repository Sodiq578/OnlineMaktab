import React from 'react';
import './News.css';

function News() {
  return (
    <div className="page news">
      <h1>Latest News and Updates</h1>

      <div className="news-article">
        <img src="https://picsum.photos/800/400" alt="News Image 1" className="news-image" />
        <div className="news-content">
          <h2>Breaking News Headline</h2>
          <p>
            This is an example of breaking news where important updates are shared. In this article, we
            will cover the latest trends, new innovations, and global developments. Stay tuned for more!
          </p>
          <p>
            <strong>Date:</strong> January 19, 2025
          </p>
        </div>
      </div>

      <div className="news-article">
        <img src="https://picsum.photos/800/400" alt="News Image 2" className="news-image" />
        <div className="news-content">
          <h2>Global Events and Conferences</h2>
          <p>
            A variety of global events are happening this year. Learn about major international conferences, workshops, and meet-ups.
            From technology to health, there is always something happening!
          </p>
          <p>
            <strong>Date:</strong> January 18, 2025
          </p>
        </div>
      </div>

      <div className="video-section">
        <h2>Watch Our Latest Video</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="image-gallery">
        <h2>Image Gallery</h2>
        <div className="gallery">
          <img src="https://picsum.photos/300" alt="Gallery Image 1" className="gallery-item" />
          <img src="https://picsum.photos/300" alt="Gallery Image 2" className="gallery-item" />
          <img src="https://picsum.photos/300" alt="Gallery Image 3" className="gallery-item" />
        </div>
      </div>

      <div className="news-article">
        <img src="https://picsum.photos/800/400" alt="News Image 3" className="news-image" />
        <div className="news-content">
          <h2>Technology and Innovation</h2>
          <p>
            A look into the newest advancements in technology, from AI developments to innovations in healthcare. What does the future hold?
          </p>
          <p>
            <strong>Date:</strong> January 17, 2025
          </p>
        </div>
      </div>

    </div>
  );
}

export default News;
