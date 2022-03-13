import { UserType as UserDataType } from '@store/models/user/types';
import { AxiosResponse } from 'axios';

export type ChangePasswordRequest = {
    currentPassword: string;
    newPassword: string;
    newPasswordAgain: string;
};

export type ChangePasswordResponse = {
    success?: Record<string, never>;
    invalidRequest?: string;
    invalidPassword?: Record<string, never>;
    unauthorized?: Record<string, never>;
};

export type ChangeEmailRequest = {
    email: string;
    currentPassword: string;
};

export type ChangeEmailResponse = {
    success?: Record<string, never>;
    invalidEmail?: Record<string, never>;
    emailExists?: Record<string, never>;
    unauthorized?: Record<string, never>;
};

export type SetDocumentRequest = {
    name: string;
    surname: string;
    patronymic?: string;
    birthday: string;
    country: string;
    city: string;
    street?: string;
    house?: string;
    flat?: string;
    sn: string;
    issueDate: string;
    acceptAgreement: boolean;
    photo?: Buffer;
};

export type SetDocumentResponse = {
    success?: Record<string, never>;
    invalidRequest?: string;
};

export type GetAbonentRequest = Record<string, never>;

export type GetAbonentResponse = {
    success?: UserDataType;
    invalidRequest?: string;
    unauthorized?: Record<string, never>;
};

export type UserType = {
    get: () => Promise<AxiosResponse<GetAbonentResponse>> | { data: GetAbonentResponse };
    setDocument: (data: SetDocumentRequest) => Promise<AxiosResponse<SetDocumentResponse>> | { data: SetDocumentResponse };
    changeEmail: (data: ChangeEmailRequest) => Promise<AxiosResponse<ChangeEmailResponse>> | { data: ChangeEmailResponse };
    changePassword: (data: ChangePasswordRequest) => Promise<AxiosResponse<ChangePasswordResponse>> | { data: ChangePasswordResponse };
};
