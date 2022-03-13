import { createContext, PropsWithChildren, useState } from 'react';

export interface ISliderContext {
    id?: number;
    setId?: (n: number) => void;
}

export const SliderStateContext = createContext<ISliderContext>({});

export const SliderContextProvider = ({ children }: PropsWithChildren<ISliderContext>): JSX.Element => {
    const [idState, setIdState] = useState<number>(0);

    const setId = (id: number) => setIdState(id);

    return <SliderStateContext.Provider value={{ id: idState, setId }}>{children}</SliderStateContext.Provider>;
};
