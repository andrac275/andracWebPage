import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log(` Type of Name before pipe: ${typeof value.name}`);
    console.log(` Type of Age before pipe: ${typeof value.age}`);
    const ageNumber = parseInt(value.age.toString(), 10);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: ageNumber };
  }
}
