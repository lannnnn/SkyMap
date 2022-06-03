const { json } = require('express');
const fs = require('fs')
module.exports = {
    
    setSunRise(sunrise) {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        data = JSON.parse(data)
        data.sunrise = sunrise;
        data = JSON.stringify(data)
        fs.writeFile("./public/file/user.json", data, (err) => {
            if (err) { console.log(err)}
        });
        
        return true;
    },

    getSunRise() {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        //data = JSON.parse(JSON.stringify(data));
        data = JSON.parse(data);
        return data.sunrise;
    },

    setSunSet(sunset) {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        data = JSON.parse(data)
        data.sunset = sunset;
        data = JSON.stringify(data)
        fs.writeFile("./public/file/user.json", data, (err) => {
            if (err) { console.log(err)}
        });
        
        return true;
    },

    getSunSet() {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        //data = JSON.parse(JSON.stringify(data));
        data = JSON.parse(data);
        return data.sunset;
    },

    setLightPol(lightPol) {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        data = JSON.parse(data)
        data.lightPol = lightPol;
        data = JSON.stringify(data)
        fs.writeFile("./public/file/user.json", data, (err) => {
            if (err) { console.log(err)}
        });
        
        return true;
    },

    getLightPol() {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        //data = JSON.parse(JSON.stringify(data));
        data = JSON.parse(data);
        return data.lightPol;
    },

    setComment(comment) {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        data = JSON.parse(data)
        data.comment = comment;
        data = JSON.stringify(data)
        fs.writeFile("./public/file/user.json", data, (err) => {
            if (err) { console.log(err)}
        });
        
        return true;
    },

    getComment() {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        //data = JSON.parse(JSON.stringify(data));
        data = JSON.parse(data);
        return data.comment;
    },

    setMessage(message) {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        data = JSON.parse(data)
        data.message = message;
        data = JSON.stringify(data)
        fs.writeFile("./public/file/user.json", data, (err) => {
            if (err) { console.log(err)}
        });
        
        return true;
    },

    getMessage() {
        const defData = {
            "sunrise": "",
            "sunset": "",
            "lightPol": 0,
            "comment": "",
            "message": "",
        };
        var data = defData;
        try {
            const file = fs.readFileSync('./public/file/user.json', 'utf-8');
            data = file
        } catch (error) {
            console.error(err);
        }
        //data = JSON.parse(JSON.stringify(data));
        data = JSON.parse(data);
        return data.message;
    },
}
