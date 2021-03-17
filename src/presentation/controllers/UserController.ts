 import {HttpRequest,HttpResponse} from '../protocols/Http';
 import {badRequest} from '../helpers/HttpHelper'
 import {MissingParamError} from '../errors/MissinParamError';
 import {Controller} from '../protocols/controller'

 class UserController implements Controller {
  store(httpRequest: HttpRequest):HttpResponse{
   const requiredFields = ['name', 'phone_number', 'email', 'age', 'weight']

  for(const field of requiredFields){
    if(!httpRequest.body[field]){
      return badRequest(new MissingParamError(field))
    }
  }
}
 }

export default UserController;
