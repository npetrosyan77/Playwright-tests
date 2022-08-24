const faker = require('faker')

export const studentData = () =>{
        return{
            fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
            phoneNumber: faker.random.number(10000000).toString(),
            invalidEmail: `${faker.random.word(1)}.com`,
            invalidPass: `${faker.random.number(4)}abc`,
            email: `careristtest+test${faker.random.number(50)}@gmail.com`,
            createPass: `${faker.internet.password(8)}123`
        }

}
