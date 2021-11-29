# WireNode
A simple API mock app with NodeJS.

## Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd wirenode(root folder)
npm install
npm run start
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:1717
```

## How to use

- Create the resquest and response object like in the example inside the mappings folder
- Test to see if your request are receiving the expected responses

### Object example

```sh
{
    "request": {
        "urlPath": "/test",
        "method": "GET",
        "queryParms":{
            "api_key": "UHAIuhishdihAIUhgigsdi"
        }
    },
    "response": {
        "status": 200,
        "jsonBody": {
            "data": [
                {
                    "type": "articles",
                    "id": "1",
                    "attributes": {
                        "title": "JSON:API paints my bikeshed!",
                        "body": "The shortest article. Ever."
                    },
                    "relationships": {
                        "author": {
                            "data": {
                                "id": "42",
                                "type": "people"
                            }
                        }
                    }
                }
            ],
            "included": [
                {
                    "type": "people",
                    "id": "42",
                    "attributes": {
                        "name": "John"
                    }
                }
            ]
        }
    }
}
```

You can change the host in the config.js file and all the other configurations.

## License

MIT

**Open Source tool :)**
