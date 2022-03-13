import { userMock, userWeb } from './user';
import { registrationMock, registrationWeb } from './registration';
import { authMock, authWeb } from './auth';

const apiWeb = {
    user: userWeb,
    registration: registrationWeb,
    auth: authWeb,
};

const apiDev = {
    user: userMock,
    registration: registrationWeb,
    auth: authWeb,
};
export default apiDev;
