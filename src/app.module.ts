import { Module } from '@nestjs/common';
import { MessageModule } from './modules/message/message.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://chatapp:Aq123456@cluster0.pkfvhu8.mongodb.net/?retryWrites=true&w=majority', {
      connectionName: 'chat',
    }),
    MessageModule
  ],
})

export class AppModule {}
