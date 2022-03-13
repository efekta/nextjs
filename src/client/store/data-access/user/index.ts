import { makeRequest } from '../request';
import { userMocks } from './mocks';
import {
    ChangePasswordRequest,
    ChangeEmailRequest,
    SetDocumentRequest,
    UserType,
    GetAbonentRequest,
    GetAbonentResponse,
    SetDocumentResponse,
    ChangeEmailResponse,
    ChangePasswordResponse,
} from './types';

const getUserUrl = '/api.Abonent/getAbonent';
const changePasswordUrl = '/api.Abonent/changePassword';
const changeEmailUrl = '/api.Device/changeEmail';
const setDocumentUrl = '/api.Device/setDocument';

export const userWeb: UserType = {
    get: () => makeRequest<GetAbonentRequest, GetAbonentResponse>({ url: getUserUrl, needToken: true }),
    changePassword: (data: ChangePasswordRequest) =>
        makeRequest<ChangePasswordRequest, ChangePasswordResponse>({ url: changePasswordUrl, needToken: true, data }),
    setDocument: (data: SetDocumentRequest) =>
        makeRequest<SetDocumentRequest, SetDocumentResponse>({ url: setDocumentUrl, needToken: true, data }),
    changeEmail: (data: ChangeEmailRequest) =>
        makeRequest<ChangeEmailRequest, ChangeEmailResponse>({ url: changeEmailUrl, needToken: true, data }),
};

export const userMock: UserType = {
    get: () => ({ data: { success: userMocks } }),
    setDocument: () => ({ data: { success: {} } }),
    changeEmail: () => ({ data: { success: {} } }),
    changePassword: () => ({ data: { success: {} } }),
};
