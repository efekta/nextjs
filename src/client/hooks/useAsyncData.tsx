import { useEffect, useState } from 'react';
import { getData } from '@client/services/getData';

export const useAsyncData = (url: string) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const data = await getData(url);
            await setData(data);
        })();
    }, []);

    return data;
};
