import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
}
