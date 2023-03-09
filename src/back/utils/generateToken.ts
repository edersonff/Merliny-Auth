import { privatekey } from '../config';
import { sign } from 'jsonwebtoken';
export default (user: any) => {
    const token = sign({ id: user.id }, privatekey, { expiresIn: '1d' });
    return token;
}
