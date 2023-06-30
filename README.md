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

*FRONT_BASE_PATH* configures the base path of the front app. Default is /
*API_BASE_URL* configured full or relative path to the api server


### How to start the dev server for development? ###

    npm install
    npm run dev


### How to build the assets? ###

    npm run build

