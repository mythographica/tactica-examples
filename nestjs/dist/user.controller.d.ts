import { UserService } from './user.service';
import { CreateUserDto, CreateAdminDto, CreateSuperAdminDto, UserResponseDto, AdminResponseDto, SuperAdminResponseDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): UserResponseDto;
    getUser(id: string): UserResponseDto;
}
export declare class AdminController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createAdmin(createAdminDto: CreateAdminDto): AdminResponseDto;
    getAdmin(id: string): AdminResponseDto;
}
export declare class SuperAdminController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createSuperAdmin(createSuperAdminDto: CreateSuperAdminDto): SuperAdminResponseDto;
    getSuperAdmin(id: string): SuperAdminResponseDto;
}
