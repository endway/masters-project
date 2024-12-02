import { Injectable } from "@angular/core";
import { map, Observable, of, switchMap, tap } from "rxjs";
import { User, UserId } from "../../core/auth/user.model";
import { LocalStorage } from "../../core/local-storage.service";

const randomUserId = (): UserId => String(Math.floor(Math.random() * 100));

const seed: Array<User> = [
    { id: randomUserId(), name: "John Doe 1", email: "john.doe.1@gmail.com", role: "user", groups: [] },
    { id: randomUserId(), name: "John Doe 2", email: "john.doe.2@gmail.com", role: "user", groups: [] },
    { id: randomUserId(), name: "John Doe 3", email: "john.doe.3@gmail.com", role: "admin", groups: [] },
    { id: randomUserId(), name: "John Doe 4", email: "john.doe.4@gmail.com", role: "user", groups: [] },
    { id: randomUserId(), name: "John Doe 5", email: "john.doe.5@gmail.com", role: "user", groups: [] },
    { id: randomUserId(), name: "John Doe 6", email: "john.doe.6@gmail.com", role: "user", groups: [] },
    { id: randomUserId(), name: "John Doe 7", email: "john.doe.7@gmail.com", role: "user", groups: [] },
];

@Injectable()
export class UsersRepository {
    private storage = new LocalStorage<Array<User>>("mp.users");

    constructor() {
        this.storage.get().pipe(tap((users) => {
            if (users) {
                return;
            }

            this.storage.set(seed);
        })).subscribe();
    }

    getAll(): Observable<Array<User>> {
        return this.storage.get().pipe(map((users) => (users || [])));
    }

    add(user: User) {
        return this.getAll().pipe(
            tap((users) => {
                this.storage.set([
                    ...users,
                    user,
                ])
            }),
        );
    }

    remove(userToRemove: User) {
        return this.getAll().pipe(
            tap((users) => {
                this.storage.set(users.filter((user) => user.id !== userToRemove.id));
            }),
        );
    }
}