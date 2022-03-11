export type ModalsPublicType = 'auth' | 'emailSent' | 'feedback' | 'integration' | '';

export type ModalsPrivateType = '';

export type ModalsModelType = {
    public: ModalsPublicType;
    private: ModalsPrivateType;
};
