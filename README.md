# Orders of customer microservice by Nodejs
### I have try to build mini microservice project .

## First, Microservice architect diagram
![alt text](./node-microservice-arch.png)

### API gateway is Reverse Proxy between each service,<br>And  then Customer service can request to Product service and Member service can request to Customer service too.

## Second, Data Relationship diagram
![alt text](./orderscust-database.png)

### Customer can have many products and Product can have many customer.<br>So Orders is contain product and customer.<br>Next Cards must have product group so Products is relate to Cards then<br> Customer can have many cards and Card can have many customer too.<br>So Members is contain card and customer.

## Lastly, Service architecture diagram
![alt text](./service-architect.png)

## In the future I will make it into containerize bt docker soon.