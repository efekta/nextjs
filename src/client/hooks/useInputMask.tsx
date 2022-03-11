import { useState } from 'react';
import useMask from '@ryuuji3/react-mask-hook';

export const useInputMask = (mask, placeholder = '_') => {
    const [value, setValue] = useState<string>('');

    return useMask({
        value,
        onChange: setValue,
        mask: mask ,
        placeholder: placeholder,
    });
}
