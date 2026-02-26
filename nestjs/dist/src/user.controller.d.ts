import { UserService } from './user.service';
import { CreateUserDto, CreateAdminDto, CreateSuperAdminDto } from './dto/user.dto';
import type { UserResponseInstance, AdminResponseInstance, SuperAdminResponseInstance } from '../.tactica/types';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): UserResponseInstance;
    getUser(id: string): UserResponseInstance;
}
export declare class AdminController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createAdmin(createAdminDto: CreateAdminDto): AdminResponseInstance;
    getAdmin(id: string): AdminResponseInstance;
}
export declare class SuperAdminController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createSuperAdmin(createSuperAdminDto: CreateSuperAdminDto): SuperAdminResponseInstance;
    getSuperAdmin(id: string): SuperAdminResponseInstance;
}
