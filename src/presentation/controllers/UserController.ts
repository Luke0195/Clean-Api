 import {HttpRequest,HttpResponse} from '../protocols/Http'
 class UserController {
  handle(httpRequest: HttpRequest):HttpResponse{
    return {
      statusCode:400,
      body:{}
    };
  }
}

export default UserController;
