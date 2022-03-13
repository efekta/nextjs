export type UserType = {
    email: {
        address: string;
        confirmed: boolean;
    };
    document: {
        completelyFilled: boolean;
        name: string;
        surname: string;
        patronymic: string;
        phone: string;
        birthday: string;
        address: {
            country: string;
            city: string;
            street: string;
            house: string;
            flat: string;
        };
        sn: string;
        issueDate: string;
    };
};
