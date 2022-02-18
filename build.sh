#!/bin/bash

cd ./frontend/

npm run build

cd ..

docker compose build
