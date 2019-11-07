# cli-analytics
Cli-Analytics App is an application specially designed to keep a record of all cli commands that are executed for a certain project. It is connected with MongoDB and uses a docker composer to run them together.

Besides both services are running on docker containers, the recorded data will remain after mongo container is down and can be used again.  

**App specifications**

By sending a post request, the data is saved on the database following the next schema:

```
    {
        "type": "typeOfCommand",
        "metadata": {
            "param1": "value",
            "param2": "value"
        }
    }
```

Where `type` is required body parameter, `metadata` is optional and represents the params that has been executed with the command.

The App also has a get method that reads a certain command resource from the database. The command type should be provided as a query parameter `/:type`.

App listens on a port: 3000 and has security checks for authorization by an ID as a header.

**Building the App:**

To run the application you need to fill your `API_ID` in the docker-compose.yaml file and then execute:

```
    docker-compose up
```

It is now set to store the data in `mongo-volume` folder that will be created in the same directory where `docker-compose up` is executed.
If you want to make some changes then you need to build it by yourself. Go to docker-compose.yaml file again and change `image: limechain/cli-analytics:latest` to `build: .` and run `docker-compose up --build`.

For an easy integration with the project of which you would want to track the cli-commands you may use this [SDK](https://github.com/LimeChain/cli-analytics-sdk). 
