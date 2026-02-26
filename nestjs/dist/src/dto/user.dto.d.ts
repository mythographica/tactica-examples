export declare class CreateUserDto {
    email: string;
    name: string;
}
export declare class CreateAdminDto extends CreateUserDto {
    role: string;
    permissions?: string[];
}
export declare class CreateSuperAdminDto extends CreateAdminDto {
    domain: string;
}
export declare class UserResponseDto {
    id: string;
    email: string;
    name: string;
    type: string;
}
export declare class AdminResponseDto extends UserResponseDto {
    role: string;
    permissions: string[];
}
export declare class SuperAdminResponseDto extends AdminResponseDto {
    domain: string;
}
