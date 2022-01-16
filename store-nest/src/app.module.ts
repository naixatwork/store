import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageModule } from './entities/package/package.module';
import { CustomerModule } from './entities/customer/customer.module';
import { AdminController } from './controllers/admin.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/store'),
    PackageModule,
    CustomerModule,
  ],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
