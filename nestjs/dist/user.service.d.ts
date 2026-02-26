import { UserEntityType, AdminEntityType, SuperAdminEntityType } from './entities/user.entity';
import { UserResponseDto, AdminResponseDto, SuperAdminResponseDto } from './dto/user.dto';
export declare class UserService {
    private users;
    private admins;
    private superAdmins;
    createUser(user: UserEntityType): UserResponseDto;
    createAdmin(admin: AdminEntityType): AdminResponseDto;
    createSuperAdmin(superAdmin: SuperAdminEntityType): SuperAdminResponseDto;
    findUser(id: string): UserResponseDto;
    findAdmin(id: string): AdminResponseDto;
    findSuperAdmin(id: string): SuperAdminResponseDto;
}
