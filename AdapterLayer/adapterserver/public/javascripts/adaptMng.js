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
}
