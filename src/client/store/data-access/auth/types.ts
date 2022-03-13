import { AxiosResponse } from 'axios';

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    success?: {
        token: string;
    };
    invalidEmailOrPassword?: Record<string, never>;
    invalidRequest?: string;
    tooManyAttempts?: number;
};

export type PasswordRestoreRequest = {
    email: string;
};

export type PasswordRestoreResponse = {
    success?: Record<string, never>;
    invalidRequest?: string;
    invalidEmail?: Record<string, never>;
    accountNotFound?: Record<string, never>;
    expired?: Record<string, never>;
    tooManyErrorAttempts?: string;
};

export type VerifyPasswordRestoreRequest = {
    verificationToken: string;
    password: string;
};

export type VerifyPasswordRestoreResponse = {
    success?: Record<string, never>;
    invalidRequest?: string;
    expired?: Record<string, never>;
    invalidToken?: Record<string, never>;
};

export type AuthType = {
    login: (data: LoginRequest) => Promise<AxiosResponse<LoginResponse>> | { data: LoginResponse };
    passwordRestore: (data: PasswordRestoreRequest) => Promise<AxiosResponse<PasswordRestoreResponse>> | { data: PasswordRestoreResponse };
    verifyPasswordRestore: (
        data: VerifyPasswordRestoreRequest
    ) => Promise<AxiosResponse<VerifyPasswordRestoreResponse>> | { data: VerifyPasswordRestoreResponse };
};
