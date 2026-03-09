import type { UserEntityInstance, UserResponseInstance, AdminEntityInstance, AdminResponseInstance, SuperAdminEntityInstance, SuperAdminResponseInstance, RootAsyncInstance, ResultFromDecorateInstance, SyncBaseInstance, SubAsyncInstance, SubDecorateInstance, SentienceInstance, ConsciousnessInstance, CuriosityInstance, EmpathyInstance, GratitudeInstance, SympathyInstance, MemoryInstance } from './types';
declare module 'mnemonica' {
    interface TypeRegistry {
        'UserEntity': new (...args: unknown[]) => UserEntityInstance;
        'UserEntity.UserResponse': new (...args: unknown[]) => UserResponseInstance;
        'UserEntity.AdminEntity': new (...args: unknown[]) => AdminEntityInstance;
        'UserEntity.AdminEntity.AdminResponse': new (...args: unknown[]) => AdminResponseInstance;
        'UserEntity.AdminEntity.SuperAdminEntity': new (...args: unknown[]) => SuperAdminEntityInstance;
        'UserEntity.AdminEntity.SuperAdminEntity.SuperAdminResponse': new (...args: unknown[]) => SuperAdminResponseInstance;
        'RootAsync': new (...args: unknown[]) => RootAsyncInstance;
        'RootAsync.ResultFromDecorate': new (...args: unknown[]) => ResultFromDecorateInstance;
        'SyncBase': new (...args: unknown[]) => SyncBaseInstance;
        'SyncBase.SubAsync': new (...args: unknown[]) => SubAsyncInstance;
        'SyncBase.SubAsync.SubDecorate': new (...args: unknown[]) => SubDecorateInstance;
        'Sentience': new (...args: unknown[]) => SentienceInstance;
        'Sentience.Consciousness': new (...args: unknown[]) => ConsciousnessInstance;
        'Sentience.Consciousness.Curiosity': new (...args: unknown[]) => CuriosityInstance;
        'Sentience.Consciousness.Empathy': new (...args: unknown[]) => EmpathyInstance;
        'Sentience.Consciousness.Empathy.Gratitude': new (...args: unknown[]) => GratitudeInstance;
        'Sentience.Consciousness.Sympathy': new (...args: unknown[]) => SympathyInstance;
        'Sentience.Memory': new (...args: unknown[]) => MemoryInstance;
    }
}
import type { TypeRegistry } from 'mnemonica';
export type { TypeRegistry };
