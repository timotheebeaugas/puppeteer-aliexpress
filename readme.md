# Scraping Aliexpress
This program connects to the Aliexpress website to perform a search and retrieve three information on the top ten products: names, prices and the number of pieces available.    
The informations are stored in a JSON file named `output.json`.  
Warning: Aliexpress changes its CSS class daily to deceive robots.  
  
This project uses node `14.17.0`.  

### Project description

    .
    ├── src                                 # source files
    │    ├── getProductsContent.js          # retrieval of product informations
    │    ├── getProductsLinks.js            # retrieving the links of each item
    │    ├── scrape.js                      # main file which calls the functions
    │    ├── search.js                      # login to Aliexpress and search the product
    │    └── wirteSaveFile.js               # storing data in a JSON file with FS module
    |── index.js                            # call of the main function without the navigation window
    |── output.json                         # saved data      
    |── test.js                             # call of the main function with the navigation window
    └── README.md                           # instructions


### Install packages 
```
npm install  
```
### Run with window 
```
npm test  
```
### Run without window 
```
npm start  
```