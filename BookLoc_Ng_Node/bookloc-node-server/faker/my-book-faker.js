const faker = require('faker');
const commonUtils = require('../utils/common-utils');

const myBookFaker = {};



//let book = null;
myBookFaker.fakeNew = function() {
    const resultBookInfos = [];
    for (let i = 0; i < 200; i++) {
        //faker.seed(200);
        let book = {
            id : commonUtils.generateUniqeId(),
            isbn: faker.phone.phoneNumber(),
            title: faker.name.firstName() + " from " + faker.name.jobDescriptor(),
            pageCount: faker.random.number()
        };

        faker.helpers.contextualCard();

        console.log(`book ${i}: ${JSON.stringify(book)}`);

        resultBookInfos.push(book);

    }

    return resultBookInfos;
}



module.exports = myBookFaker;