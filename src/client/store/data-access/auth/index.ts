import { makeRequest } from '../request';
import {
    AuthType,
    LoginRequest,
    LoginResponse,
    PasswordRestoreRequest,
    PasswordRestoreResponse,
    VerifyPasswordRestoreRequest,
    VerifyPasswordRestoreResponse,
} from './types';

const loginUrl = '/api.Auth/login';
const passwordRestoreUrl = '/api.Auth/requestPasswordRestore';
const verifyPasswordRestoreUrl = '/api.Auth/verifyPasswordRestore';

export const authWeb: AuthType = {
    login: (data) => makeRequest<LoginRequest, LoginResponse>({ url: loginUrl, data }),
    passwordRestore: (data) => makeRequest<PasswordRestoreRequest, PasswordRestoreResponse>({ url: passwordRestoreUrl, data }),
    verifyPasswordRestore: (data) =>
        makeRequest<VerifyPasswordRestoreRequest, VerifyPasswordRestoreResponse>({ url: verifyPasswordRestoreUrl, data }),
};

export const authMock: AuthType = {
    login: () => ({ data: { success: { token: 'lalala' } } }),
    passwordRestore: () => ({ data: { success: {} } }),
    verifyPasswordRestore: () => ({ data: { success: {} } }),
};
