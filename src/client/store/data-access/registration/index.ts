import { makeRequest } from '../request';
import { RegistrationRequest, RegistrationResponse, RegistrationType, VerifyRequest, VerifyResponse } from './types';

const registerUrl = '/api.Registration/registerWeb';
const verifyUrl = '/api.Registration/verifyWebRegistration';
export const registrationWeb: RegistrationType = {
    register: (data) => makeRequest<RegistrationRequest, RegistrationResponse>({ url: registerUrl, data }),
    verify: (data) => makeRequest<VerifyRequest, VerifyResponse>({ url: verifyUrl, data }),
};

export const registrationMock: RegistrationType = {
    register: () => ({ data: { success: { token: 'lalala' } } }),
    verify: () => ({ data: { success: { token: 'lalala', email: 'la@la.com' } } }),
};
