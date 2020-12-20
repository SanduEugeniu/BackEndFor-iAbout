export default {
    db: {
        user: 'sandu',
        pass: 'A.532221010',
        host: 'localhost',
        port: '27017',
        database: 'testdb',
        authSource: 'admin',
    },
    host: {
        url: '<server-url>',
        port: '3000',
    },
    jwt: {
        secretOrKey: 'secret',
        expiresIn: 36000000,
    },
    mail: {
        host: '<smtp-host>',
        port: '<port>',
        secure: false,
        user: '<username>',
        pass: '<password>',
    },
  };
