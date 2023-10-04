package com.team.artisys.Auth;

import com.team.artisys.model.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    public AuthResponse login(LoginRequest request) {

    }

    public AuthResponse register(RegisterRequest request) {
        Users user = User.builder()
                .name()
    }
}
