package com.app.streaming.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "videos")
public class Video {
    @Id
    private String videoId;
    private String title;
    private String description;
    private String category;
    private String filePath;
    private String thumbnailPath;
    private String contentType;
    private long duration;
    private long views;
}
