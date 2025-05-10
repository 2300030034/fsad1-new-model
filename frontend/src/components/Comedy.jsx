import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { Link } from 'react-router-dom';

const Comedy = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComedyVideos = async () => {
            try {
                const response = await axios.get('/api/videos/category/comedy');
                setVideos(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load comedy videos');
                setLoading(false);
            }
        };

        fetchComedyVideos();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 p-4">
                {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Comedy Videos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <Link 
                        to={`/video/${video.videoId}`} 
                        key={video.videoId}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            {video.thumbnailPath ? (
                                <img
                                    src={`http://localhost:8080/${video.thumbnailPath}`}
                                    alt={video.title}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500">No thumbnail</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                            <p className="text-gray-600">{video.description}</p>
                            <div className="mt-2 text-sm text-gray-500">
                                Views: {video.views}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Comedy; 