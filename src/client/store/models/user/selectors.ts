import { createSelector } from 'reselect';
import { RootState } from '../../index';

export const getUser = (state: RootState) => state.user.data;
export const getLoadStatus = (state: RootState) => state.user.loadStatus;

export const getDocument = createSelector(getUser, (user) => {
    const { name, surname, patronymic, birthday, address, sn, issueDate } = user.document;
    const { country, city, street, house, flat } = address;

    return { name, surname, patronymic, birthday, country, city, street, house, flat, sn, issueDate, img: '', agreement: false };
});
