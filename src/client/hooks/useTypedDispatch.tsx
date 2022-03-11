import { useDispatch } from 'react-redux';
import { Dispatch } from '../store';

export const useTypedDispatch = () => useDispatch<Dispatch>();
