import {ButtonVariant} from "@client/app/components/UI/Button/Button.props";
import Simcard from '@client/app/public/PagesHolder/index/About/img/sim.svg';
import Phone from '@client/app/public/PagesHolder/index/About/img/phone.svg';
import {ReactElement} from "react";


export interface AboutDataInterface {
    id: number;
    button: ButtonVariant | string | undefined;
    buttonText: string;
    picture: ReactElement;
    title: string;
    description: string;
    modal: string;
}

export const aboutData:AboutDataInterface[] = [
    {
        id: 0,
        title: 'Инновация',
        picture: <Simcard/>,
        description: 'Виртуальная eSIM это новая технология, которая не требует отдельного SIM-слота в смартфоне,\n' +
            '                            ваш смартфон может иметь только 1 слот для При этом виртуальная eSIM функционирует\n' +
            '                            как обычная SIM-карта. Перед оформлением eSIM обя',
        button: 'secondary',
        buttonText: 'Моё устройство подойдёт?',
        modal: 'main'
    },

    {
        id: 1,
        title: 'Удобство',
        picture: <Phone/>,
        description: 'В отличие от обычной SIM-карты, с eSIM не нужно переставлять SIM-карты или использовать\n' +
            '                            два смартфона - постоянный российский номер всегда будет активен и одновременно будут\n' +
            '                            доступны льготные тарифы на мобильный интернет местных мобильных операторов.\n' +
            '                            С виртуальной eSIM партнеры и родственники смогут дозвонится также и по\n' +
            '                            стандартному российскому номеру.',
        button: 'primary',
        buttonText: 'Подключить',
        modal: 'auth'
    },
];
