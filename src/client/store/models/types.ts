type LoadingStatus = 'success' | 'error' | 'unavailable' | 'initial';

export type LoadingType = {
    inProgress: boolean;
    status: LoadingStatus;
};
