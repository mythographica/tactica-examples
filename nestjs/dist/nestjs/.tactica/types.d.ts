type TypeConstructor<T> = {
    new (...args: unknown[]): T;
    (...args: unknown[]): T;
};
export type UserEntityInstance = {
    id: string;
    email: string;
    name: string;
    UserResponse: TypeConstructor<UserResponseInstance>;
    AdminEntity: TypeConstructor<AdminEntityInstance>;
};
export type UserResponseInstance = UserEntityInstance & {
    id: string;
    email: string;
    name: string;
    type: 'user';
};
export type AdminEntityInstance = UserEntityInstance & {
    id: string;
    email: string;
    name: string;
    role: string;
    permissions: Array<string>;
    AdminResponse: TypeConstructor<AdminResponseInstance>;
    SuperAdminEntity: TypeConstructor<SuperAdminEntityInstance>;
};
export type AdminResponseInstance = AdminEntityInstance & {
    id: string;
    email: string;
    name: string;
    type: 'admin';
    role: string;
    permissions: Array<string>;
};
export type SuperAdminEntityInstance = AdminEntityInstance & {
    id: string;
    email: string;
    name: string;
    role: string;
    permissions: Array<string>;
    domain: string;
    SuperAdminResponse: TypeConstructor<SuperAdminResponseInstance>;
};
export type SuperAdminResponseInstance = SuperAdminEntityInstance & {
    id: string;
    email: string;
    name: string;
    type: 'superadmin';
    role: string;
    permissions: Array<string>;
    domain: string;
};
export type RootAsyncInstance = {
    value: number;
    computed: number;
    ResultFromDecorate: TypeConstructor<ResultFromDecorateInstance>;
};
export type ResultFromDecorateInstance = RootAsyncInstance & {
    result: number;
    timestamp: number;
};
export type SyncBaseInstance = {
    SubAsync: TypeConstructor<SubAsyncInstance>;
};
export type SubAsyncInstance = SyncBaseInstance & {
    delay: number;
    extra: string;
    processed: string;
    SubDecorate: TypeConstructor<SubDecorateInstance>;
};
export type SubDecorateInstance = SubAsyncInstance & {
    decorateValue: string;
    combined: string;
};
export {};
