module.exports = {

    processPol(lightPol) {
        lightPol = JSON.parse(lightPol)
        var pol = (lightPol).split(";");
        return  pol[pol.length -1]
    },

    processMin(lightPol) {
        lightPol = JSON.parse(lightPol)
        var pol = (lightPol).split(";");
        return  pol[pol.length -2]
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

    combinePayload(lon, limag, starnm, starbm) {
        console.log(lon)
        var payload = "date=0&lon=" + lon +
                        "&coords=on&moonp=on&deep=on&deepm=6.5&consto=on&constn=on&constb=on&limag=" + limag + 
                        "&starn=on&starnm=" + starnm + "&starb=on&starbm=" + starbm + 
                        "&showmb=-1.5&showmd=6.0&imgsize=512&fontscale=1.0&scheme=0&elements=";
        return payload;
    },
}
