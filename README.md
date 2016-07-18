# react-dropzone-sample
The short code demonstrates how to upload files with react and dropzonejs library.

This demonstration is a duplicate example of React-Dropzone-Component. Thank you so much. If you want to read full explication, please visit [here](https://github.com/felixrieseberg/React-Dropzone-Component).

I decided to push this code because the origin example was not clear and not easy to apply with some confused configuration.
I organized the structure, added two possibility to upload resource files (with Express or PHP) and also changed the uploading template.

###Installation
```npm install```

###Run
Build bundle.js

`webpack`

Run server

`npm start`

Test

[http://localhost:3000](http://localhost:3000)

##Change destination storage
By default, I used PHP process to upload file to external storage (see `upload.php`).

If you want to use Express files uploading, please follow the instructions below:

###Using express

Uncomment: 
```require('../multerImpl')(app)``` in server.js

Uncomment:
```postUrl: '/uploadHandler'``` in index.js

Comment ```action``` attribute in render function.

Rebuild `bundle.js`
