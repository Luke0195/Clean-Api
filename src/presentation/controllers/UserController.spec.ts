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

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });


});
