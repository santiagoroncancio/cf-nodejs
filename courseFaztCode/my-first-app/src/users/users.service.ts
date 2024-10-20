import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getUsers() {
        return ['users 1', 'users 2', 'users 3'];
    }

}
