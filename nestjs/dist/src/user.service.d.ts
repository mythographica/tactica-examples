import type { UserEntityInstance, AdminEntityInstance, SuperAdminEntityInstance, UserResponseInstance, AdminResponseInstance, SuperAdminResponseInstance } from '../.tactica/types';
export declare class UserService {
    private users;
    private admins;
    private superAdmins;
    createUser(user: UserEntityInstance): UserResponseInstance;
    createAdmin(admin: AdminEntityInstance): AdminResponseInstance;
    createSuperAdmin(superAdmin: SuperAdminEntityInstance): SuperAdminResponseInstance;
    findUser(id: string): UserResponseInstance;
    findAdmin(id: string): AdminResponseInstance;
    findSuperAdmin(id: string): SuperAdminResponseInstance;
}
