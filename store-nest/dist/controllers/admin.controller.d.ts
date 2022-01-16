declare class AdminLoginDto {
    username: string;
    password: string;
}
export declare class AdminController {
    login(body: AdminLoginDto): Promise<boolean>;
}
export {};
