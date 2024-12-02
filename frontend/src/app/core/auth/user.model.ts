import { GroupId } from "./group.model";

export type UserId = string;
type UserRole = "user" | "admin" | "owner";

export interface User {
    id: UserId;
    name: string;
    email: string;
    role: UserRole;
    groups: Array<GroupId>;
}