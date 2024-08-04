import { Controller, Get, Req, Res } from '@nestjs/common';
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
}
