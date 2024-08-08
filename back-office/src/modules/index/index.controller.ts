import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user.pipe';
import { AuthGuard } from './guards/auth.guard';

@Controller('')
export class IndexController {
  //This is an example of code if I need specifically to use express on nestJS for whatever reason
  @Get('/express')
  //@Req and @Res comes from express
  expressExample(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Index web page',
    });
  }

  //Custom HTTP response codes
  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new!!!! On index module';
  }

  @Get('notFound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found on index module';
  }

  @Get('errorPage')
  @HttpCode(500)
  errorPage() {
    return 'Error Router on index module';
  }

  //----------------
  //Pipes example
  /* 'ticket/:num' sends an string and if I GET 'ticket/10' this returna 1014
  This is why is necessary to add the ParseIntPipe next to the @Param, this
  way this will return if I GET 'ticket/10', the response 24 (10+14) */
  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num);
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  //Custom pipe on module index/pipes folder
  @Get('greet')
  greetUser(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(` Type of Name after pipe: ${typeof query.name}`);
    console.log(` Type of Age after pipe: ${typeof query.age}`);

    return `Hello ${query.name}, you are ${query.age} years old`;
  }

  //----------------
  //Guards example
  @Get('greetWithGuard')
  @UseGuards(AuthGuard)
  greetUserWithGuard(@Query() query: { name: string; age: number }) {
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
