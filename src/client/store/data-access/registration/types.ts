import { AxiosResponse } from 'axios';

export type RegistrationRequest = {
    email: string;
    password: string;
};

export type RegistrationResponse = {
    success?: {
        token: string;
    };
    invalidRequest?: string;
    invalidEmail?: Record<string, never>;
    invalidPassword?: Record<string, never>;
    emailAlreadyUsed?: Record<string, never>;
    tooManyAttempts?: number;
    expired?: Record<string, never>;
};

export type VerifyRequest = {
    token: string;
};

export type VerifyResponse = {
    success?: {
        token: string;
        email: string;
    };
    invalidRequest?: string;
    expired?: Record<string, never>;
    invalidToken?: Record<string, never>;
};

export type RegistrationType = {
    register: (data: RegistrationRequest) => Promise<AxiosResponse<RegistrationResponse>> | { data: RegistrationResponse };
    verify: (data: VerifyRequest) => Promise<AxiosResponse<VerifyResponse>> | { data: VerifyResponse };
};
