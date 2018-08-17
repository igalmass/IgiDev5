var faker = require('faker');


for (let i = 0 ; i < 200; i++)
{
    const book = {
        title: faker.lorem.words(),
        author: faker.name.findName(),
        author_image: faker.image.avatar(),
        release_date: faker.date.recent(),
        image: faker.image.abstract(),
        price: faker.commerce.price(),
        short_description: faker.lorem.sentence(),
        long_description: faker.lorem.paragraph()
    }

    console.log(book);
}

