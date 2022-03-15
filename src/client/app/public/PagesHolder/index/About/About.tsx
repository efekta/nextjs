// import { useIsMedium } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import { aboutData } from './About.data';
import { Button, Container, Title, Text } from '@/ui';

import s from './About.module.scss';

export const About = (): JSX.Element => {
    // const isLarge = useIsMedium();
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <section className={s.about}>
            <Container>
                <Title variant='h1'>Что такое виртуальная eSIM от Глонасс Мобайл?</Title>
                <div className={s.aboutRow}>
                    {aboutData.map((i) => (
                        <div key={i.id} className={s.aboutCol}>
                            <div className={s.wrapperPicture}>
                                {i.picture}
                            </div>
                            <Title variant='h2'>{i.title}</Title>
                            <Text>{i.description}</Text>
                            <Button variant={i.button} onClick={() => showPublicModal(i.modal)} className={s.btn}>{i.buttonText}</Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
