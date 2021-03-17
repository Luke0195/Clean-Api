 import {HttpRequest,HttpResponse} from '../protocols/Http';
 import {MissingParamError} from '../errors/MissinParamError'
 class UserController {
  handle(httpRequest: HttpRequest):HttpResponse{
    if(!httpRequest.body.name){
      return{
        statusCode: 400,
        body: new MissingParamError('name')
    }
  }

    if(!httpRequest.body.phone_number){
      return{
        statusCode: 400,
        body: new MissingParamError('phone_number')
      }
    }
  }
}

export default UserController;
