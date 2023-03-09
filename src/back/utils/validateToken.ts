import { decode } from 'jsonwebtoken';
export default (hash: string) => {
    return decode(hash)
}
