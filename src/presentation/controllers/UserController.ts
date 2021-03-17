 import {HttpRequest,HttpResponse} from '../protocols/Http';
 import {badRequest} from '../helpers/HttpHelper'
 import {MissingParamError} from '../errors/MissinParamError'
 class UserController {
  handle(httpRequest: HttpRequest):HttpResponse{
   const requiredFields = ['name', 'phone_number']

  for(const field of requiredFields){
    if(!httpRequest.body[field]){
      return badRequest(new MissingParamError(field))
    }
  }
}
 }

export default UserController;
