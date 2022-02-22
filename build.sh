#!/bin/bash

cd ./pkgui-frontend/

npm run build

cd ..

docker compose build
