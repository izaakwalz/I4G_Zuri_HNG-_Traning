# POSTMAN DATA

```json
{
  "info": {
    "_postman_id": "7da6a0f7-8a91-49a5-9ecb-a5141e9dce2b",
    "name": "ZxI4GxHNG",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "users",
      "item": [
        {
          "name": "{{ZxI4G}}/users",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"name\": \"test user\",\r\n    \"email\": \"test@test.com\",\r\n    \"country\": \"China\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{ZxI4G}}/users",
              "host": ["{{ZxI4G}}"],
              "path": ["users"]
            },
            "description": "Create a basic user  data\r\n{\r\n    \"name\": \"John Doe\",\r\n    \"email\": \"john@test.com\",\r\n    \"country\": \"China\"\r\n}"
          },
          "response": []
        },
        {
          "name": "{{ZxI4G}}/users/usser id",
          "request": {
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"name\": \"John Doe\",\r\n    \"email\": \"john@test.com\",\r\n    \"country\": \"China\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{ZxI4G}}/users/6093b700475ebe4a306ff5a6",
              "host": ["{{ZxI4G}}"],
              "path": ["users", "6093b700475ebe4a306ff5a6"]
            },
            "description": "update user data \r\n\r\nreq.body"
          },
          "response": []
        },
        {
          "name": "{{ZxI4G}}/users",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{ZxI4G}}/users",
              "host": ["{{ZxI4G}}"],
              "path": ["users"]
            }
          },
          "response": []
        },
        {
          "name": "{{ZxI4G}}/users/6095839e3831a2650cb75524",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "{{ZxI4G}}/users/6095839e3831a2650cb75524",
              "host": ["{{ZxI4G}}"],
              "path": ["users", "6095839e3831a2650cb75524"]
            },
            "description": "DELETE Data requires params {user id}"
          },
          "response": []
        }
      ],
      "protocolProfileBehavior": {}
    }
  ],
  "protocolProfileBehavior": {}
}
```
