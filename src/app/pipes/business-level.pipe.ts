import { Pipe, PipeTransform } from '@angular/core';
import { BUSINESSLEVELS } from '../data/business-levels.data';

@Pipe(
    { name: 'businessLevel' }
)
export class BusinessLevelPipe implements PipeTransform {
    transform(value: number): string {
        return BUSINESSLEVELS[value];
    }
}