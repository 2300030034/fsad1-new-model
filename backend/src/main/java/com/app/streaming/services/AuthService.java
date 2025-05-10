package com.app.streaming.services;

import com.app.streaming.payload.LoginRequest;
import com.app.streaming.payload.RegisterRequest;

public interface AuthService {
    String login(LoginRequest request);
    String register(RegisterRequest request);
} 