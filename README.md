# [Foodie](https://foodie.afriticgroup.com)
by `Yunus Ibrahim`

## What is it?

Foodie is an app that helps find the nearest delicious food places, so you can enjoy the most of you visit in town.

![foodie_demo_gif2](server/readme_media/foodie.gif)


### Screenshots

<img .src="./src/assets/images/foodie_API.png">

## Foodie API 

Foodie API has different endpoints that gives you access to multiple features
- Search for restaurant in Boston and within you area #1
- Save the restaurant that you like for future reference #2
- Create an account to access the list of saved restaurant #3
- Get information on a specific restaurant #4

#### Search for restaurant in Boston by simply calling the endpoint `https://foodie.afriticgroup.com/api/v1/restaurantdata?limit=1&q=Boston` 
  
Required query parameter:
   > **q=** type what you are looking for.
  
  **Results**
```
{
    "restaurants": [
        {
            "CITY": "Boston",
            "LICSTATUS": "Active",
            "LicenseAddDtTm": "2014-02-25 10:31:11",
            "ZIP": "02116",
            "dayphn": "+10000000000",
            "BusinessName": "B. Good Burger",
            "DESCRIPT": "Eating & Drinking",
            "Longitude": "-71.07875",
            "State": "MA",
            "rank": 0.0573088,
            "Address": "665 Boylston",
            "Latitude": "42.34999",
            "DBAName": null,
            "_id": 167,
            "LICENSECAT": "FS",
            "Property_ID": "18372"
        }
    ],
    "totalResults": 100
}
```

#### Create an account by calling the endpoint `https://foodie.afriticgroup.com/api/v1/adduser` 
  
Required query parameter:
   > **userId**
   > **displayName**
   > **email**

Optional query parameter:
   > **photoURL**

  **Results**
```
{
"userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
"displayName": "Yunus",
"email": "yunus@test.com",
"photoURL": "assets/images/avatar-placeholder.png"
}
```

#### Save a restaurant by calling the endpoint `https://foodie.afriticgroup.com/api/v1/addrestaurant` 
  
Required query parameter:
   > **userId**
   > **restaurantId**
   > **city**
   > **state**
   > **zipCode**

Optional query parameter:
   > **businessName**
   > **dbaName**
   > **licStatus**
   > **licenceCat**
   > **licenceAddDateTime**
   > **description**
   > **dayPhone**
   > **latitude**
   > **longitude**
   > **propertyID**

  **Results**
```
{
  "userId":"TBPNX6ESSwUqOEkAV5cpdlM38a92",
  "restaurantId": "993",
  "businessName": "Energize",
  "dbaName": null,
  "licStatus": "Active",
  "licenceCat": "FS",
  "licenceAddDateTime": "2015-12-22 11:13:38",
  "description": "Eating & Drinking",
  "dayPhone": "+17812907769",
  "propertyID": "143653",
  "city": "Brighton",
  "state": "MA",
  "zipCode": "02135",
  "latitude": "42.35044",
  "longitude": "-71.16784"
}
```

## Technologies Used

#### Backend technologies

- Node packages:

  - [Handlebars](http://handlebarsjs.com/)
  - [express](https://www.npmjs.com/package/express)
  - [nodemon](https://www.npmjs.com/package/nodemon)

- GitHub
- Local Server - For deployment

#### Frontend technologies

- HTML
- CSS
- Bootstrap (http://getbootstrap.com/)
- Javascript
- jQuery (https://jquery.com/)


### Technologies
* Google Firebase Authentication, 
* MongoDB
* Mongoose
* Google Places API, Google Geolocation API
* Multer
* PM2
* React
* JavaScript
* Node.js
* HTML5
* SCSS
* Express
* Node