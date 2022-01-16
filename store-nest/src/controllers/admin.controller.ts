import { Body, Controller, Post } from '@nestjs/common';

class AdminLoginDto {
  username: string;
  password: string;
}

@Controller('admin')
export class AdminController {
  @Post('login')
  async login(@Body() body: AdminLoginDto): Promise<boolean> {
    const { username, password } = body;
    if (username === 'Mahdi2000' && password === '67926792') {
      return true;
    } else {
      return false;
    }
  }
}
