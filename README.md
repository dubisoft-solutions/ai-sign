### AI Sign front app ###

### Install nodeenv ###

**nodeenv** used to isolate the node versions on the system 

    pip3 install nodeenv

Create a virtualenv with the 18 node version

    nodeenv -n 16.18.0 env

Active it 

    . env/bin/activate


### Before you start ###

Copy the .env.tpl file to .env. This step is needed to setup the initial settings of the app

*VITE_FRONT_BASE_PATH* configures the base path of the front app. Default is /
*VITE_API_BASE_URL=https://daa4-2601-600-9c81-3580-ac8e-71c1-f838-ab7f.ngrok-free.app/api/
* configured full or relative path to the api server


### How to start the dev server for development? ###

    npm install
    npm run dev


### How to build the assets? ###

    npm run build

