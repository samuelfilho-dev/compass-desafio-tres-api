#!/bin/bash

npm install

npm run typeorm migration:generate migrations/initial-migrate
npm run typeorm migration:run

npm run start:dev