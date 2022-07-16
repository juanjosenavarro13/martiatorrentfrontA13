#!/bin/bash
# eliminar archivos antiguos
rm /var/www/html/*.ico
rm /var/www/html/*.txt
rm /var/www/html/*.html
rm /var/www/html/*.js
rm /var/www/html/*.css

# generar nueva build
cd /var/www/html/frontend/
npm install
npm update
npm run build

# copiar la nueva build
cp /var/www/html/frontend/dist/martiatorrentfront-a13/* /var/www/html/