# Pokedex

#### _A web site to find data on first generation Pokemon. - July 8th, 2019_

#### _By **Lisa Jensen, Erik Irgens and Jessica Munoz**_

## Description

This web site utilizes the Poke API to retrieve information regarding first generation Pokemon.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **User clicks on pokedex icon, clicks on a specific Pokemon and sees that Pokemon sprite appear.** | (click pokedex icon and click sprite Charzard) | Charzard displays on screen. |
| **User submits clicks on a new specific Pokemon and sees that Pokemon sprite appear and the former removed.** | (click different sprite Ponyta) | Charzard is removed, Ponyta appears on the screen. |
| **User clicks on "?" while viewing a Pokemon sprite and informational card regarding sprite appears.** | (click to see sprite Ponyta and click "?") | "Ponyta Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time. Type 1: fire" Sample Moves: double-kick horn-drill stomp Habitat: Grassland Height: 1m Weight: 30kg. |
| **User clicks on Pokemon that had evolved from another Pokemon, in the first generation, and sees both the Pokemon they clicked and a smaller sprite from which it evolved.** | (click Rabidash) | Rabidash appears with Ponyta "Rabidash evolves from Ponyta". |
| **User clicks landscape icon and sees, "Time of Day" toggle that changes the background.** | (clicks landscape icon and slides to the right) | Background changes with each slide increment. |
| **User clicks camera icon and the print dialog box appears to print.** | (clicks Rabidash then camera icon) | Print dialog box appears. |
| **User clicks sound icon and sound stops playing and icon has red mark added. If sound icon was already stopped and user clicks icon, sound begins playing again and icon has red mark removed.** | (click sound icon) | Sound ends and red mark appears on sound icon. |


## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/erik-t-irgens/pokedex
    ```
2. Install correct dependencies (while inside the project directory)
    ```
    $ npm install
    ```
3. Begin running the application (while inside the project directory)
    ```
    $ npm run start
    ```
4. Visit the application via web browser:
    ```
    localhost:5000/
    ```
    
    OR
    
  Visit the live hosted version of this application on GitHub Pages
  ```
  http://erik-t-irgens.github.io/pokedex/
  ```
  
## Known Bugs
* Sometimes, when first loading the page, Pokemon may appear out of order in the drop-down menu. If this occurs, some functionality will have unintended results.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Node
* WebPack
* Poke API

## Support and contact details

_Please contact Lisa Jensen, Erik Irgens and Jessica Munoz with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Lisa Jensen Erik Irgens Jessica Munoz_**
