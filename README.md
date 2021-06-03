#Installation et création du projet Reactjs
installer visual code .

sudo apt update
sudo apt install nodejs
nodejs -v
sudo apt install npm

sudo npm install -g npx
sudo apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
 
fermer visual code et le reouvrir

sudo apt install npm



Before updating the Node.js release, check which version you are currently using with:

node -v
2. Next, clear npm cache with the command:

npm cache clean -f
3. Install n globally:

npm install -g n
4. Now that you have n installed, you can use the module to install the latest stable release of Node.js:

sudo n stable



Pour creer un projet avec la commande :
npx create-react-app mon-app
cd mon-app
sudo npm start
