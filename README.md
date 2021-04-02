# [Foodie](https://foodie.afriticgroup.com)
by `Yunus Ibrahim`

## What is it?

Foodie is an app that helps find the nearest delicious food places, so you can enjoy the most of you visit in town. The data are collected from the **ANALYZE BOSTON API**.

![foodie_demo_gif2](server/readme_media/foodie.gif)


### Screenshots

<img .src="./src/assets/images/foodie_API.png">

## Foodie API 

Foodie API has different endpoints that gives you access to multiple features
- Search for restaurant in Boston and within you area
- Save the restaurant that you like for future reference
- Create an account to access the list of saved restaurant
- Get information on a specific restaurant
- Get all the restaurants saved by a user

#### Search for restaurant in Boston by simply calling the endpoint with a {GET} request
`https://foodie.afriticgroup.com/api/v1/restaurantdata?limit=1&q=Boston` 
  
> Required query parameter:
  - **q=** type what you are looking for.
  
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

#### Create a user account by calling the endpoint with a {POST} request 
`https://foodie.afriticgroup.com/api/v1/adduser`

> Required query parameter:
   - **userId**
   - **displayName**
   - **email**

> Optional query parameter:
   - **photoURL**

  **Results**
```
{
    "photoURL": "assets/images/avatar-placeholder.png",
    "restaurants": [],
    "_id": "6067a622a8562670d1287556",
    "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
    "displayName": "Yunus",
    "email": "yunus@test.com",
    "createdAt": "2021-04-02T23:17:54.523Z",
    "updatedAt": "2021-04-02T23:17:54.523Z",
    "__v": 0
}
```

#### Get a specific user account by calling the endpoint with a {GET} request
`https://foodie.afriticgroup.com/api/v1/user/{id}` 

> Required query parameter:
   - **id**

  **Results**
```
[
    {
        "photoURL": "assets/images/avatar-placeholder.png",
        "restaurants": [],
        "_id": "6067a622a8562670d1287556",
        "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
        "displayName": "Yunus",
        "email": "yunus@test.com",
        "createdAt": "2021-04-02T23:17:54.523Z",
        "updatedAt": "2021-04-02T23:17:54.523Z",
        "__v": 0
    }
]
```

#### Update a user account by calling the endpoint with a {PATCH} request
`https://foodie.afriticgroup.com/api/v1/updateuser` 

> Required query parameter:
  - **userId**
  - **displayName**
  - **email**

> Optional query parameter:
  - **photoURL**

  **Results**
```
{
    "n": 1,
    "nModified": 1,
    "opTime": {
        "ts": "6946704280921309187",
        "t": 10
    },
    "electionId": "7fffffff000000000000000a",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6946704280921309187",
        "signature": {
            "hash": "yiUGy0d6MAFK23WYfj8wws9dFXY=",
            "keyId": "6933931902881497091"
        }
    },
    "operationTime": "6946704280921309187"
}
```

#### Delete a user account by calling the endpoint with a {DELETE} request
`https://foodie.afriticgroup.com/api/v1/deleteuser/{id}` 

> Required query parameter:
  - **userId** 

  **Results**
```
{
    "message": {
        "photoURL": "assets/images/avatar-placeholder.png",
        "restaurants": [],
        "_id": "6067a4f0a8562670d1287555",
        "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
        "displayName": "Yunus",
        "email": "yunus@test.com",
        "createdAt": "2021-04-02T23:12:48.438Z",
        "updatedAt": "2021-04-02T23:12:48.438Z",
        "__v": 0
    }
}
```

#### Get all the users account by calling the endpoint with a {GET} request 
`https://foodie.afriticgroup.com/api/v1/adduser`

> Required query parameter:
   - **No Parameter**

  **Results**
```
[
    {
        "photoURL": "assets/images/avatar-placeholder.png",
        "restaurants": [],
        "_id": "6067a7cda8562670d1287557",
        "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
        "displayName": "Yunus",
        "email": "yunus@test.com",
        "createdAt": "2021-04-02T23:25:01.832Z",
        "updatedAt": "2021-04-02T23:25:01.832Z",
        "__v": 0
    }
]
```

#### Save a restaurant on the Foodie API by calling the endpoint  with a {POST} request
`https://foodie.afriticgroup.com/api/v1/addrestaurant` 
  
> Required query parameter:
   - **userId**
   - **restaurantId**
   - **city**
   - **state**
   - **zipCode**

> Optional query parameter:
   - **businessName**
   - **dbaName**
   - **licStatus**
   - **licenceCat**
   - **licenceAddDateTime**
   - **description**
    **dayPhone**
   - **latitude**
   - **longitude**
   - **propertyID**

  **Results**
```
{
    "restaurantUpdated": {
        "users": [
            "6067a7cda8562670d1287557"
        ],
        "_id": "6067a8b0a8562670d1287558",
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
        "longitude": "-71.16784",
        "createdAt": "2021-04-02T23:28:48.768Z",
        "updatedAt": "2021-04-02T23:28:48.948Z",
        "__v": 0
    },
    "userUpdated": {
        "photoURL": "assets/images/avatar-placeholder.png",
        "restaurants": [
            "6067a8b0a8562670d1287558"
        ],
        "_id": "6067a7cda8562670d1287557",
        "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
        "displayName": "Yunus",
        "email": "yunus@test.com",
        "createdAt": "2021-04-02T23:25:01.832Z",
        "updatedAt": "2021-04-02T23:28:48.893Z",
        "__v": 0
    }
}
```
#### Get all the saved restaurants account on Foodie API by calling the endpoint with a {GET} request 
`https://foodie.afriticgroup.com/api/v1/restaurants`

> Required query parameter:
   - **No Parameter**

  **Results**
```
[
    {
        "users": [
            {
                "photoURL": "assets/images/avatar-placeholder.png",
                "restaurants": [
                    "6067a8b0a8562670d1287558"
                ],
                "_id": "6067a7cda8562670d1287557",
                "userId": "TBPNX6ESSwUqOEkAV5cpdlM38a92",
                "displayName": "Yunus",
                "email": "yunus@test.com",
                "createdAt": "2021-04-02T23:25:01.832Z",
                "updatedAt": "2021-04-02T23:28:48.893Z",
                "__v": 0
            }
        ],
        "_id": "6067a8b0a8562670d1287558",
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
        "longitude": "-71.16784",
        "createdAt": "2021-04-02T23:28:48.768Z",
        "updatedAt": "2021-04-02T23:28:48.948Z",
        "__v": 0
    }
]
```

#### Delete a saved restaurant on Foodie API by calling the endpoint with a {DELETE} request
`https://foodie.afriticgroup.com/api/v1/deleterestaurant/{id}` 

> Required query parameter:
  - **restaurantId** 

  **Results**
```
{
    "message": {
        "users": [
            "6067a7cda8562670d1287557"
        ],
        "_id": "6067a8b0a8562670d1287558",
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
        "longitude": "-71.16784",
        "createdAt": "2021-04-02T23:28:48.768Z",
        "updatedAt": "2021-04-02T23:28:48.948Z",
        "__v": 0
    }
}
```


## Technologies Used

#### Backend technologies

- Node packages:

  - [axios](https://www.npmjs.com/package/axios)
  - [cors](https://www.npmjs.com/package/cors)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [express](https://www.npmjs.com/package/express)
  - [mongodb](https://www.npmjs.com/package/mongodb)
  - [mongoose](https://www.npmjs.com/package/mongoose)

- GitHub
- Atlas MongoDB 
- Local Server - For deployment

