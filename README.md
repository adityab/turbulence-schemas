turbulence-schemas
==================

This module contains core mongo schema definitions for Turbulence. It wraps the connect/disconnect calls for mongoose because you shouldn't have to access mongoose directly in your code.
The core models `Agent` and `Post` are exported, along with some derivative models like `Status` and `Person`.

## Install

    npm install -g

## Usage
    var StreamNet = require('turbulence-schemas');

    var person = new StreamNet.agentTypes.Person();

    StreamNet.connect('localhost', 'tester', function() {
        
        person.create(
            'adityab',  // username
            'Aditya',   // first name
            'Bhatt',    // last name
            [
            { key: 'email', val: 'aditya@adityabhatt.org' },
            { key: 'twitter', val: 'aditya_bhatt' },
            { key: 'facebook', val: 'aditya.j.bhatt' },
            { key: 'skype', val: 'aditya.j.bhatt' },
            { key: 'email', val: 'aditya_bhatt@daiict.ac.in' }
            ],
            function (err) {
                if(err) console.log(err.message);
                    else {
                        person.save(function (err) {
                            if(err) {
                                console.log(err.message);
                                StreamNet.disconnect();
                            }
                            else {
                                StreamNet.disconnect();
                            }
                        });
                    }
            });
    });
