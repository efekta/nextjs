import { UserType } from '@store/models/user/types';

export const userMocks: UserType = {
    email: {
        address: 'winetoadd@gmail.com',
        confirmed: false,
    },
    document: {
        completelyFilled: false,
        name: 'Владислав',
        surname: 'Кузякин',
        patronymic: 'Викторович',
        phone: '81111111111',
        birthday: '15.11.2005',
        address: {
            country: 'Россия',
            city: 'Москва',
            street: 'Баррикадная',
            house: '15',
            flat: '25',
        },
        sn: '1111111111',
        issueDate: '25.12.2020',
    },
};
