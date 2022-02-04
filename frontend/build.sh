rm -rf ./dist/*
rm -rf ./.cache

npx parcel build src/index.html --dist-dir dist --cache-dir .cache
