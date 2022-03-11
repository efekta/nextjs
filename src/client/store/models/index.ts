import { Models } from '@rematch/core';
import modals from './modals';

export interface RootModel extends Models<RootModel> {
    modals: typeof modals;
}

export const models: RootModel = { modals };
