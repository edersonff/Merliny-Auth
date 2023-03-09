import { verify } from 'jsonwebtoken';
import { privatekey } from '../config';

export default (token: any) => {
    return verify(token, privatekey);
}
