WIKI API INTERFACE

How to launch the project locally:

1. Run the `create_db.sql` script using software like MySQL Workbench, for example.
2. Use software like XAMPP Control Panel to establish a MySQL connection.
3. Make sure you have Python installed and run the `wikepedia_api.py` script by executing the following commands:
   - `pip install requests`
   - `python wikepedia_api.py`
4. Open the front-end and execute `npm install` and `npm start` in the terminal.
5. Execute the command: `.\tunnelto-windows.exe set-auth --key fktxpkh0BiysKNkrtQBqYH`
6. Execute the command: `.\tunnelto-windows.exe --subdomain wiki-api --port 3000`
7. In a separate terminal, navigate to the back-end folder and execute the following commands:
   - `npm install express`
   - `npm install mysql`
   - `npm install cors`
   - `node server.js`
8. Execute the command: `.\tunnelto-windows.exe set-auth --key fktxpkh0BiysKNkrtQBqYH`
9. Execute the command: `.\tunnelto-windows.exe --subdomain wiki-api-back --port 5000`
10. Open the web application at https://wiki-api.tunnel.talkr.ai/

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
