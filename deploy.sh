#!/bin/bash

sudo su

# eliminar archivos antiguos
rm /var/www/html/*.ico
rm /var/www/html/*.txt
rm /var/www/html/*.html
rm /var/www/html/*.js
rm /var/www/html/*.css
echo "Archivos eliminados"

# generar nueva build
cd /var/www/html/frontend/
npm install
echo "Instalacion de dependencias"
npm update
echo "Actualizacion de dependencias"
npm run build
echo "Generacion de build"

# copiar la nueva build
cp /var/www/html/frontend/dist/martiatorrentfront-a13/* /var/www/html/
echo "Copia de build"