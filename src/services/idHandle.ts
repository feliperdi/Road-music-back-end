import {v4} from 'uuid'


export default class IdHandle{
    static generate(): string{
        return v4();
    }
}