INSERT INTO videos (video_id, title, description, category, file_path, thumbnail_path, content_type, duration, views)
VALUES (
    'comedy1',
    'Comedy Video 1',
    'A hilarious comedy video',
    'comedy',
    'C:/Users/jahna/Downloads/fsad/Video-Streaming-Project-main/Video-Streaming-Project-main/Video Streaming app front end/video-streaming-app/public/videos/comedy 1.mp4',
    'thumbnails/comedy1.jpg',
    'video/mp4',
    0,
    0
) ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    description = VALUES(description),
    category = VALUES(category),
    file_path = VALUES(file_path),
    thumbnail_path = VALUES(thumbnail_path),
    content_type = VALUES(content_type); 