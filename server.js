var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Book');
mobileApp.tables.add('EnigmaUser');
mobileApp.tables.add('EnigmaUsersType');
mobileApp.tables.add('Food');
mobileApp.tables.add('OrderDetail');
mobileApp.tables.add('Orders');
mobileApp.tables.add('OrdersType');
mobileApp.tables.add('Reservation');
mobileApp.tables.add('Room');
mobileApp.tables.add('RoomServices');
mobileApp.tables.add('RoomType');


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
