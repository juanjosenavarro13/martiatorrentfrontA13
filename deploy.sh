#!/bin/bash
# eliminar archivos antiguos
rm /var/www/html/*.ico
rm /var/www/html/*.txt
rm /var/www/html/*.html
rm /var/www/html/*.js
rm /var/www/html/*.css

# copiar la nueva build
cp /var/www/html/frontend/dist/martiatorrentfront-a13/* /var/www/html/