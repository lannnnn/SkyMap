module.exports={
    combinePayload(lon, limag, starnm, starbm) {
        var payload = "date=0&lon=" + lon +
                        "&coords=on&moonp=on&deep=on&deepm=6.5&consto=on&constn=on&constb=on&limag=" + limag + 
                        "&starn=on&starnm=" + starnm + "&starb=on&starbm=" + starbm + 
                        "&showmb=-1.5&showmd=6.0&imgsize=512&fontscale=1.0&scheme=0&elements=";
        return payload;
    },

    requestUrl(content) {
        var reg = /img src="(.*?)"/;
        var url = reg.exec(content.data)[1].trim();
        return url;
    },

    processLevel(lightPol) {
        // <0.10     7.6-8.0 17.5
        // 0.10-0.25 7.1-7.5. 16.5
        // 0.25-0.30 6.6-7.0 16
        // 0.30-3.0  6.1-6.5 15.5
        // 3.0-15.0  5.6-6.0 15
        // 15.0-40.0 5.1-5.5 14.5
        // >40.0     4.0-5.0 13-14
        if(lightPol <= 0.1) {
            return "Very low light pollution level here! The largest magnitude of the star can be observe by eye is (7.6-8.0), while (17.5) if using telescope"
        } else if(lightPol <= 0.25) {
            return "Relatively low light pollution level here! The largest magnitude of the star can be observe by eye is (7.1-7.5), while (16.5) if using telescope"
        } else if(lightPol <= 0.3) {
            return "Some light pollution detected here. The largest magnitude of the star can be observe by eye is (6.6-7.0), while (16) if using telescope"
        } else if(lightPol <= 3.0) {
            return "Obvious light pollution here! The largest magnitude of the star can be observe by eye is (6.1-6.5), while (15.5) if using telescope"
        } else if(lightPol <= 15.0) {
            return "Relatively serious light pollution here. The largest magnitude of the star can be observe by eye is (5.6-6.0), while (15) if using telescope"
        } else if(lightPol <= 40.0) {
            return "Serious light pollution here. The largest magnitude of the star can be observe by eye is (5.1-5.5), while (14.5) if using telescope"
        } else {
            return "Not a suitable stargazing place! The largest magnitude of the star may be observe by eye is (4.0-5.0), while (13-14) if using telescope"
        }
    },

    processRange(lat, lng) {
        // 1° = 111km
        // 5km -> 0.045
        var lineSpec = "LINESTRING(" + JSON.stringify(parseFloat(lng)-0.0225) + " "+ JSON.stringify(parseFloat(lat)-0.0225) + "," 
                        + JSON.stringify(parseFloat(lng)-0.0225) + " " + JSON.stringify(parseFloat(lat)+0.0225) + "," 
                        + JSON.stringify(parseFloat(lng)+0.0225) + " " + JSON.stringify(parseFloat(lat)+0.0225) + ","
                        + JSON.stringify(parseFloat(lng)+0.0225) + " " + JSON.stringify(parseFloat(lat)-0.0225) + ","
                        + JSON.stringify(parseFloat(lng)-0.0225) + " " + JSON.stringify(parseFloat(lat)-0.0225) + ")"
        return lineSpec;
    },

    processMessage(min) {
        // <0.10     7.6-8.0 17.5
        // 0.10-0.25 7.1-7.5. 16.5
        // 0.25-0.30 6.6-7.0 16
        // 0.30-3.0  6.1-6.5 15.5
        // 3.0-15.0  5.6-6.0 15
        // 15.0-40.0 5.1-5.5 14.5
        // >40.0     4.0-5.0 13-14
        if(min <= 3.0) {
            return "There be somewhere suitable for stargazing within 5km, try to pin somewhere nearby!"
        } else if(min <= 5.0) {
            return "There be somewhere ok for stargazing within 5km, try to pin somewhere nearby!"
        } else {
            return "The light pollution here within 5km is pretty heavy, not a suitable location for stargazing, Maybe try somewhere further..."
        }
    },

    processPol(lightPol) {
        var pol = (lightPol).split(";");
        return  pol[pol.length -1]
    },

    processMin(lightPol) {
        var pol = (lightPol).split(";");
        return  pol[pol.length -2]
    }
}