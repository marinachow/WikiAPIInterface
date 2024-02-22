WIKI API INTERFACE

Comment lancer le projet en local :

1. Lancer le script create_db.sql en utilisant un logiciel comme MySQL Workbench, par exemple.
2. Utiliser un logiciel comme XAMPP Control Panel pour établir une connexion MySQL.
3. Assurez-vous d'avoir Python installé et lancer le script wikepedia_api.py en executant les commandes:
   - pip install requests
   - python wikepedia_api.py
4. Ouvrir le front-end et exécuter npm install et npm start dans le terminal.
5. Exécuter la commande: .\tunnelto-windows.exe set-auth --key fktxpkh0BiysKNkrtQBqYH
6. Exécuter la commande: .\tunnelto-windows.exe --subdomain wiki-api --port 3000
7. Dans un terminal à part, se déplacer dans le dossier back-end et exécuter les commandes suivantes:
   - npm install express
   - npm install mysql
   - npm install cors
   - node server.js
9. Exécuter la commande: .\tunnelto-windows.exe set-auth --key fktxpkh0BiysKNkrtQBqYH
10. Exécuter la commande: .\tunnelto-windows.exe --subdomain wiki-api-back --port 5000
11. Ouvrir l'application web sur https://wiki-api.tunnel.talkr.ai/
