'use strict';

var React             = require('react');
var DropzoneComponent = require('react-dropzone-component');
var ReactDOMServer = require('react-dom/server');
import {render} from 'react-dom';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    //postUrl: '/uploadHandler'
};

/**
 * For a full list of possible configurations,
 * please consult
 * http://www.dropzonejs.com/#configuration
 */
var djsConfig = {
    addRemoveLinks: false,
    acceptedFiles: "image/jpeg,image/png,image/gif",
    previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="table table-striped" className="files" id="previews">
        <div id="template" className="file-row">
            <div>
                <span className="preview"><img data-dz-thumbnail /></span>
            </div>
            <div>
                <p className="name" data-dz-name></p>
                <strong className="error text-danger" data-dz-errormessage></strong>
            </div>
            <div>
                <p className="size" data-dz-size></p>
                <div className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                <div className="progress-bar progress-bar-success" data-dz-uploadprogress></div>
            </div>
            </div>
            <div>
                <button data-dz-remove className="btn btn-danger delete">
                    <span>Delete</span>
                </button>
            </div>
        </div>
    </div>
  )
};

/**
 * If you want to attach multiple callbacks, simply
 * create an array filled with all your callbacks.
 * @type {Array}
 */
var callbackArray = [
    function() {
        console.log('Look Ma, I\'m a callback in an array!');
    },
    function() {
        console.log('Wooooow!');
    }
];

/**
 * Simple callbacks work too, of course.
 */
var simpleCallBack = function() {
    console.log('I\'m a simple callback');
};

/**
 * Attach event handlers here to be notified
 * for pretty much any event.
 * Arrays are accepted.
 */
var eventHandlers = {
    // All of these receive the event as first parameter:
    drop: callbackArray,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: simpleCallBack,
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecompleted: null
}

// Render
render(<DropzoneComponent
            config={componentConfig}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig}
            action='http://forlazyman.dev.com/upload.php'
        />, document.getElementById('content'));
