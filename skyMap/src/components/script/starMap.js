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
    }
}