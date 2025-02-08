import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../models/state';
import { AppDispatch } from './Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
