import type { UserEntityInstance, UserResponseInstance, AdminEntityInstance, AdminResponseInstance, SuperAdminEntityInstance, SuperAdminResponseInstance, RootAsyncInstance, ResultFromDecorateInstance, SyncBaseInstance, SubAsyncInstance, SubDecorateInstance, SentienceInstance, ConsciousnessInstance, CuriosityInstance, EmpathyInstance, GratitudeInstance, SympathyInstance, MemoryInstance } from './types';
type TypeConstructor<T> = {
    new (...args: unknown[]): T;
    (...args: unknown[]): T;
};
export interface TypeRegistry {
    'UserEntity': TypeConstructor<UserEntityInstance>;
    'UserEntity.UserResponse': TypeConstructor<UserResponseInstance>;
    'UserEntity.AdminEntity': TypeConstructor<AdminEntityInstance>;
    'UserEntity.AdminEntity.AdminResponse': TypeConstructor<AdminResponseInstance>;
    'UserEntity.AdminEntity.SuperAdminEntity': TypeConstructor<SuperAdminEntityInstance>;
    'UserEntity.AdminEntity.SuperAdminEntity.SuperAdminResponse': TypeConstructor<SuperAdminResponseInstance>;
    'RootAsync': TypeConstructor<RootAsyncInstance>;
    'RootAsync.ResultFromDecorate': TypeConstructor<ResultFromDecorateInstance>;
    'SyncBase': TypeConstructor<SyncBaseInstance>;
    'SyncBase.SubAsync': TypeConstructor<SubAsyncInstance>;
    'SyncBase.SubAsync.SubDecorate': TypeConstructor<SubDecorateInstance>;
    'Sentience': TypeConstructor<SentienceInstance>;
    'Sentience.Consciousness': TypeConstructor<ConsciousnessInstance>;
    'Sentience.Consciousness.Curiosity': TypeConstructor<CuriosityInstance>;
    'Sentience.Consciousness.Empathy': TypeConstructor<EmpathyInstance>;
    'Sentience.Consciousness.Empathy.Gratitude': TypeConstructor<GratitudeInstance>;
    'Sentience.Consciousness.Sympathy': TypeConstructor<SympathyInstance>;
    'Sentience.Memory': TypeConstructor<MemoryInstance>;
}
export declare function lookupTyped<T extends keyof TypeRegistry>(path: T): TypeRegistry[T] | undefined;
export declare function collectionLookup<T extends keyof TypeRegistry>(collection: {
    lookup: (path: string) => unknown;
}, path: T): TypeRegistry[T] | undefined;
export {};
