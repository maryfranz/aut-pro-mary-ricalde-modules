import {greetUser} from './sayHello.js';
import {userAge} from './userAge.js';
import * as constants from'./userData.js';

greetUser(constants.USER_NAME, constants.LAST_NAME);
console.log("User age is: " + userAge(constants.BIRTH_YEAR));