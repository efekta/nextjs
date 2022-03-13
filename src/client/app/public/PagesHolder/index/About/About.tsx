import { useIsMedium } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import Image from "next/image";
import { Button, Icon, Container, Title, Text } from '@/ui';

import s from './About.module.scss';

export const About = (): JSX.Element => {
    const isLarge = useIsMedium();
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <section className={s.about}>
            <Container>
                <Title variant="h1">Что такое виртуальная eSIM от Глонасс Мобайл?</Title>
                {/*<h1 className={s.titleH1}>Что такое виртуальная eSIM от Глонасс Мобайл?</h1>*/}

                <div className={s.aboutRow}>
                    <div className={s.aboutCol}>
                        <div className={s.wrapperPicture}>
                            <Icon className={s.image} icon='sim' width={183} height={177}/>
                            {/*<Image src='/img/svg/sim.svg' alt='Инновация' layout='fill' width={183} height={177} className={s.image}/>*/}
                        </div>
                        <Title variant="h2">Инновация</Title>
                        <Text>Виртуальная eSIM это новая технология, которая не требует отдельного SIM-слота в смартфоне,
                            ваш смартфон может иметь только 1 слот для При этом виртуальная eSIM функционирует
                            как обычная SIM-карта. Перед оформлением eSIM обязательно проверьте поддерживает
                            ли Ваше устройство технологию виртуальной eSIM.
                        </Text>

                        <Button variant='secondary' className={s.btn}>Моё устройство подойдёт?</Button>
                    </div>
                    <div className={s.aboutCol}>
                        <div className={s.wrapperPicture}>
                            <Icon className={s.image} icon='phone' width={214} height={148}/>
                            {/*<Image src='/img/picture_2.png' alt='Удобство' layout='fill' width={214} height={148} className={s.image}/>*/}
                        </div>
                        <Title variant="h2">Удобство</Title>
                        <Text>В отличие от обычной SIM-карты, с eSIM не нужно переставлять SIM-карты или использовать
                            два смартфона - постоянный российский номер всегда будет активен и одновременно будут
                            доступны льготные тарифы на мобильный интернет местных мобильных операторов.
                            С виртуальной eSIM партнеры и родственники смогут дозвонится также и по
                            стандартному российскому номеру.
                        </Text>

                        {/*<Button variant='primary' onClick={() => showPublicModal('auth')} className={cn(s.btn, s.button, { [s.active]: isActive })}>Подключить</Button>*/}
                        <Button variant='primary' className={s.btn} onClick={() => showPublicModal('auth')}>Подключить</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
