import {HttpRequest,HttpResponse} from '../protocols/Http'
export interface Controller{
  store(httpRequest: HttpRequest):HttpResponse
}
