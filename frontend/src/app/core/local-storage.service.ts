import { Observable, of } from "rxjs";

export class LocalStorage<TData> {
    constructor(private key: string) {}

    get(): Observable<TData | null> {
        const storageValue = window.localStorage.getItem(this.key);

        if (!storageValue) {
            return of(null);
        }

        return of(JSON.parse(storageValue));
    }

    set(value: TData) {
        window.localStorage.setItem(this.key, JSON.stringify(value));
    }

    clear() {
        window.localStorage.removeItem(this.key);
    }
}
