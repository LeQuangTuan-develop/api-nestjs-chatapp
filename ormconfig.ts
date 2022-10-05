import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
   type: 'mysql',
   database: 'nest',
   username: 'root',
   password: 'root',
   port: 3306,
   host: '127.0.0.1',
   entities: ['dist/entities/**/*.entity{.ts,.js}'],
   synchronize: false, // false để khi bạn thay đổi trong entities nó sẽ không tự update DB
   dropSchema: false,
 }

 export default config;