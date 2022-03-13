import { useFormContext } from 'react-hook-form';

import { Input } from '@/ui';

import { FormInputProps } from './FormInput.props';

export const FormInput = ({ name, ...props }: FormInputProps): JSX.Element => {
    const { register, formState } = useFormContext();

    return (
        <>
            <Input errors={!!formState.errors[name]?.message} message={formState.errors[name]?.message} {...props} {...register(name)} />
        </>
    );
};
