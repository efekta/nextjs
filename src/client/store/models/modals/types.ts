export type ModalsPublicType = 'auth' | 'main' | '' | string;

export type ModalsPrivateType = '';

export type ModalsModelType = {
    public: ModalsPublicType;
    private: ModalsPrivateType;
};
