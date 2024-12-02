import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Group, GroupId } from "../../core/auth/group.model";
import { LocalStorage } from "../../core/local-storage.service";

const randomGroupId = (): GroupId => String(Math.floor(Math.random() * 100));

const seed: Array<Group> = [
    { id: randomGroupId(), name: "Інженер" },
    { id: randomGroupId(), name: "Директор" },
    { id: randomGroupId(), name: "QA" },
    { id: randomGroupId(), name: "Lead" },
];

@Injectable()
export class GroupsRepository {
    private storage = new LocalStorage<Array<Group>>("mp.groups");

    constructor() {
        this.storage.get().pipe(tap((groups) => {
            if (groups) {
                return;
            }

            this.storage.set(seed);
        })).subscribe();
    }

    getAll(): Observable<Array<Group>> {
        return this.storage.get().pipe(map((groups) => (groups || [])));
    }

    add(group: Omit<Group, "id">) {
        const id = randomGroupId();
        return this.getAll().pipe(
            tap((groups) => {
                this.storage.set([
                    ...groups,
                    {
                        ...group,
                        id,
                    },
                ])
            }),
            map(() => ({ ...group, id})),
        );
    }

    remove(groupToRemove: Group) {
        return this.getAll().pipe(
            tap((groups) => {
                this.storage.set(groups.filter((group) => group.id !== groupToRemove.id));
            }),
        );
    }
}