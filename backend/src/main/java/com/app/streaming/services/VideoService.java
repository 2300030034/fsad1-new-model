package com.app.streaming.services;

import com.app.streaming.entities.Video;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VideoService {
    Video saveVideo(Video video, MultipartFile file);

    Video getVideoById(String videoId);

    Video getVideoByTitle(String title);

    List<Video> getAllVideos();
    List<Video> getVideosByCategory(String category);
    Video addVideo(Video video);
    void deleteVideo(String videoId);

    public void getAll();

    //Video processing url
    String processVideo(String videoId);
}
