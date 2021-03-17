import {MissingParamError} from '../errors/MissinParamError'
import UserController from './UserController';
describe('User Controller', () => {
  test('Should returns 400 if no name is provider', () => {
    const sut = new UserController();
    const httpRequest = {
      body: {
        phone_number: 929292,
        email: 'any_email@gmail.com',
        age: 20,
        weight: 1.80,
        ethnicity: 'white',
      },
    };

    const httpResponse = sut.store(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  });


  test('Should returns 400 if no phone_number is provider', () => {
    const sut = new UserController();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@gmail.com',
        age: 20,
        weight: 1.80,
        ethnicity: 'white',
      },
    };

    const httpResponse = sut.store(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('phone_number'))
  });

  test('Should returns 400 if no email is provider', () => {
    const sut = new UserController();
    const httpRequest = {
      body: {
        name: 'any_name',
        phone_number: 3831839,
        age: 20,
        weight: 1.80,
      },
    };

    const httpResponse = sut.store(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  });

  test('Should returns 400 if no age is provider', () => {
    const sut = new UserController();
    const httpRequest = {
      body: {
        name: 'any_name',
        phone_number: 3831839,
        email: 'any_email@gmail',
        weight: 1.80,
      },
    };

    const httpResponse = sut.store(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('age'))
  });

  test('Should returns 400 if no weight is provider', () => {
    const sut = new UserController();
    const httpRequest = {
      body: {
        name: 'any_name',
        phone_number: 3831839,
        email: 'any_email@gmail',
        age: 20

      },
    };

    const httpResponse = sut.store(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('weight'))
  });


});
