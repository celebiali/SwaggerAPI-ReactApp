import { statusTypeEnum } from '@/models/enums/StatusTypeEnum';
import {
    ExceptionTypeEnum,
} from '@/models/enums/ExceptionTypeEnum';

export interface DbResponse<TEntity> {
    data: TEntity[];
    count: number;
    sum: number;
}
export interface IEntityType<TType> extends IEntity {
    type: TType;
}
export type IEntity = BaseEntity<statusTypeEnum>
export interface BaseEntity<T> {
    id: number;
    status: T;

}


export class IEntityBase {
}