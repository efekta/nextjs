class Storage {
    public readonly version = '1.0.0';

    public getItem(key: string) {
        return localStorage.getItem(key);
    }

    public setItem<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public removeItem(key: string) {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }
}

export default new Storage();
