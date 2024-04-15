import {
  registerForEvent
} from "./chunk-SXD74U6W.mjs";
import {
  errorHandler
} from "./chunk-SIJQJ5UL.mjs";
import {
  checkIn
} from "./chunk-2PVVOUFZ.mjs";
import {
  createEvent
} from "./chunk-WE4T2YWU.mjs";
import "./chunk-J4AHKJY7.mjs";
import {
  getAttendeeBadge
} from "./chunk-CC676ZHD.mjs";
import {
  getEventAttendees
} from "./chunk-5CHSX46A.mjs";
import {
  getEvent
} from "./chunk-2TDYGUJP.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Pass-in",
      description: "Especifica\xE7\xF5es da API para o backend da aplica\xE7\xE3o",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running ");
});
export {
  app
};
