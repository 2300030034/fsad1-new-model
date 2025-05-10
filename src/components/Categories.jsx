import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const Categories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const videos = [
    { 
      id: "kgf", 
      title: "KGF",
      category: "Movies",
      path: "/videos/kgf edit.mp4",
      thumbnail: "/path/to/kgf-thumbnail.jpg",
      description: "Action-packed movie following Rocky's rise to power"
    },
    { 
      id: "friends", 
      title: "Friends",
      category: "TV Shows",
      path: "/videos/friends.mp4",
      thumbnail: "/path/to/friends-thumbnail.jpg",
      description: "Popular sitcom about six friends living in New York"
    },
    { 
      id: "pushpa", 
      title: "Pushpa",
      category: "Movies",
      path: "/videos/pushpa.mp4",
      thumbnail: "/path/to/pushpa-thumbnail.jpg",
      description: "Action drama about red sandalwood smuggling"
    }
  ];

  const categories = [
    {
      name: "Sports",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "News",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      name: "Cartoons",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Movies",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      name: "Comedy",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedVideo(null); // Reset selected video when changing categories
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const filteredVideos = selectedCategory
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Video Player Section */}
      {selectedVideo && (
        <div className="mb-12">
          <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <VideoPlayer src={selectedVideo.path} />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
            <p className="text-gray-600">{selectedVideo.description}</p>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <h2 className="text-4xl font-bold text-center mb-12">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="group cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className={`bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-gray-700 ${
              selectedCategory === category.name ? 'ring-2 ring-red-600' : ''
            }`}>
              {category.icon}
              <h3 className="text-xl font-semibold text-center text-red-600">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video List */}
      {selectedCategory && (
        <div>
          <h3 className="text-2xl font-bold mb-6">{selectedCategory}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-200"
                onClick={() => handleVideoClick(video)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* You can add video thumbnails here */}
                  <div className="flex items-center justify-center h-48 bg-gray-800">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-2">{video.title}</h4>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories; 