import axios from 'axios';
import { v4 as uuid } from 'uuid';
import storage from './storage';

const getUrl = (path: string) => {
    if (location.hostname === 'localhost' || location.hostname === process.env.NEXT_PUBLIC_NAME_DEV) {
        return `${process.env.NEXT_PUBLIC_HTTP_API_URL_DEV}/http-api${path}`;
    }

    return `${process.env.NEXT_PUBLIC_HTTP_API_URL}/http-api${path}`;
};

type RequestType<T> = {
    url: string;
    needToken?: boolean;
    data?: T | Record<string, never>;
};

export const makeRequest = <T, J>({ url, needToken, data = {} }: RequestType<T>) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-request-id': uuid().toString(),
        'x-partner-id': 'gm',
        'x-client-platform': 'web',
        'x-client-version': storage.version,
    };

    if (needToken) {
        headers['authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }

    return axios.post<J>(getUrl(url), data, {
        headers,
    });
};
