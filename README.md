# Ogp-Studio 
This repository hosts the code which helps in creating dynamic Open Graph image for the shared document of [AsyncAPI Studio](https://github.com/asyncapi/studio).

## Installation
- Clone the repository.
- Run `npm install`.
- Install netlify CLI in the root directory using the command ``npm install netlify-cli -g``.

## Usage
- The project is hosted on Netlify Edge which uses Deno runtime. You can read more about it [here](https://docs.netlify.com/edge-functions/overview/).
- To run the project, run the command ``netlify dev``. The project runs on ``localhost:8888``.
- Navigate to the ``/og`` route and enter the necessary query parameters to view the Open Graph image. <br />
**Example Usage**: View the Open Graph image at https://ogp-studio.netlify.app/og?title=Account%20Service&description=This%20service%20is%20in%20charge%20of%20processing%20user%20signups&numServers=0&numChannels=1

## Acknowledgements
- The project uses amazing projects like https://github.com/vercel/og-image and https://github.com/ascorbic/og-edge under the hood. I would like to thank all the maintainers and the contributors of the project.
