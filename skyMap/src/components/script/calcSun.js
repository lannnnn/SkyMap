module.exports = {
    //***********************************************************************/
    //* DATA STRUCTURES     日出日落时间                          */
    //***********************************************************************/

    month(name, numdays, abbr) {
        this.name = name;
        this.numdays = numdays;
        this.abbr = abbr;
    },

    ans(daySave, value) {
        this.daySave = daySave;
        this.value = value;
    },

    // isLeapYear returns 1 if the 4-digit yr is a leap year, 0 if it is not

    isLeapYear(yr) {
        return ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0);
    },

    // isPosInteger returns false if the value is not a positive integer, true is
    // returned otherwise.  The code is from taken from Danny Goodman's Javascript
    // Handbook, p. 372.

    isPosInteger(inputVal) {
        var inputStr = ("" + inputVal);
        for (var i = 0; i < inputStr.length; i++) {
            var oneChar = inputStr.charAt(i);
            if (oneChar < "0" || oneChar > "9")
                return false;
        }
        return true;
    },

    isInteger(inputVal) {
        var inputStr = "" + inputVal;
        if (inputStr == "NaN") return false;
        if (inputStr == "-NaN") return false;
        for (var i = 0; i < inputStr.length; i++) {
            var oneChar = inputStr.charAt(i);
            if (i == 0 && (oneChar == "-" || oneChar == "+")) {
                continue;
            }
            if (oneChar < "0" || oneChar > "9") {
                return false;
            }
        }
        return true;
    },

    isNumber(inputVal) {
        var oneDecimal = false;
        var inputStr = "" + inputVal;
        for (var i = 0; i < inputStr.length; i++) {
            var oneChar = inputStr.charAt(i);
            if (i == 0 && (oneChar == "-" || oneChar == "+")) {
                continue;
            }
            if (oneChar == "." && !oneDecimal) {
                oneDecimal = true;
                continue;
            }
            if (oneChar < "0" || oneChar > "9") {
                return false;
            }
        }
        return true;
    },

    //convLatLong converts any type of lat/long input
    //into  the table form and then handles bad input
    //it is nested in the calcSun function.

    convLatLong(f) {
        var neg = 0;
        var latSeconds;
        var lonSeconds
        if (f["latDeg"].value[0] == '-') {
            neg = 1;
        }

        if (neg != 1) {
            latSeconds = (parseFloat(f["latDeg"].value)) * 3600
                + parseFloat(f["latMin"].value) * 60
                + parseFloat(f["latSec"].value) * 1;

            f["latDeg"].value = Math.floor(latSeconds / 3600);
            f["latMin"].value = Math.floor((latSeconds
                - (parseFloat(f["latDeg"].value) * 3600)) / 60);
            f["latSec"].value = Math.floor((latSeconds
                - (parseFloat(f["latDeg"].value) * 3600)
                - (parseFloat(f["latMin"].value) * 60)) + 0.5);
        }
        else if (parseFloat(f["latDeg"].value) > -1) {
            latSeconds = parseFloat(f["latDeg"].value) * 3600
                - parseFloat(f["latMin"].value) * 60
                - parseFloat(f["latSec"].value) * 1;

            f["latDeg"].value = "-0";
            f["latMin"].value = Math.floor((-latSeconds) / 60);
            f["latSec"].value = Math.floor((-latSeconds
                - (parseFloat(f["latMin"].value) * 60)) + 0.5);

        }
        else {
            latSeconds = parseFloat(f["latDeg"].value) * 3600
                - parseFloat(f["latMin"].value) * 60
                - parseFloat(f["latSec"].value) * 1;

            f["latDeg"].value = Math.ceil(latSeconds / 3600);
            f["latMin"].value = Math.floor((-latSeconds
                + (parseFloat(f["latDeg"].value) * 3600)) / 60);
            f["latSec"].value = Math.floor((-latSeconds
                + (parseFloat(f["latDeg"].value) * 3600)
                - (parseFloat(f["latMin"].value) * 60)) + 0.5);
        }

        neg = 0;
        if (f["lonDeg"].value[0] == '-') {
            neg = 1;
        }

        if (neg != 1) {
            lonSeconds = parseFloat(f["lonDeg"].value) * 3600
                + parseFloat(f["lonMin"].value) * 60
                + parseFloat(f["lonSec"].value) * 1;
            f["lonDeg"].value = Math.floor(lonSeconds / 3600);
            f["lonMin"].value = Math.floor((lonSeconds
                - (parseFloat(f["lonDeg"].value) * 3600)) / 60);
            f["lonSec"].value = Math.floor((lonSeconds
                - (parseFloat(f["lonDeg"].value) * 3600)
                - (parseFloat(f["lonMin"].value)) * 60) + 0.5);
        }
        else if (parseFloat(f["lonDeg"].value) > -1) {
            lonSeconds = parseFloat(f["lonDeg"].value) * 3600
                - parseFloat(f["lonMin"].value) * 60
                - parseFloat(f["lonSec"].value) * 1;

            f["lonDeg"].value = "-0";
            f["lonMin"].value = Math.floor((-lonSeconds) / 60);
            f["lonSec"].value = Math.floor((-lonSeconds
                - (parseFloat(f["lonMin"].value) * 60)) + 0.5);
        }
        else {
            lonSeconds = parseFloat(f["lonDeg"].value) * 3600
                - parseFloat(f["lonMin"].value) * 60
                - parseFloat(f["lonSec"].value) * 1;
            f["lonDeg"].value = Math.ceil(lonSeconds / 3600);
            f["lonMin"].value = Math.floor((-lonSeconds
                + (parseFloat(f["lonDeg"].value) * 3600)) / 60);
            f["lonSec"].value = Math.floor((-lonSeconds
                + (parseFloat(f["lonDeg"].value) * 3600)
                - (parseFloat(f["lonMin"].value) * 60)) + 0.5);
        }

        //Test for invalid lat/long input

        if (latSeconds > 324000) {
            alert("You have entered an invalid latitude.\n  Setting lat= 89.8.");
            f["latDeg"].value = 89.8;
            f["latMin"].value = 0;
            f["latSec"].value = 0;
        }
        if (latSeconds < -324000) {
            alert("You have entered an invalid latitude.\n  Setting lat= -89.8.");
            f["latDeg"].value = -89.8;
            f["latMin"].value = 0;
            f["latSec"].value = 0;
        }
        if (lonSeconds > 648000) {
            alert("You have entered an invalid longitude.\n Setting lon= 180.");
            f["lonDeg"].value = 180;
            f["lonMin"].value = 0;
            f["lonSec"].value = 0;
        }
        if (lonSeconds < -648000) {
            alert("You have entered an invalid longitude.\n Setting lon= -180.");
            f["lonDeg"].value = -180;
            f["lonMin"].value = 0;
            f["lonSec"].value = 0;
        }

    },

    //***********************************************************************/
    //*This section contains subroutines used in calculating solar position */
    //***********************************************************************/
    // Convert radian angle to degrees

    radToDeg(angleRad) {
        return (180.0 * angleRad / Math.PI);
    },

    // Convert degree angle to radians

    degToRad(angleDeg) {
        return (Math.PI * angleDeg / 180.0);
    },

    //***********************************************************************/
    //* Name:    calcDayOfYear                              */
    //* Type:    Function                                   */
    //* Purpose: Finds numerical day-of-year from mn, day and lp year info  */
    //* Arguments:                                      */
    //*   month: January = 1                                */
    //*   day  : 1 - 31                                 */
    //*   lpyr : 1 if leap year, 0 if not                       */
    //* Return value:                                       */
    //*   The numerical day of year                         */
    //***********************************************************************/

    calcDayOfYear(mn, dy, lpyr) {
        var k = (lpyr ? 1 : 2);
        var doy = Math.floor((275 * mn) / 9) - k * Math.floor((mn + 9) / 12) + dy - 30;
        return doy;
    },


    //***********************************************************************/
    //* Name:    calcDayOfWeek                              */
    //* Type:    Function                                   */
    //* Purpose: Derives weekday from Julian Day                    */
    //* Arguments:                                      */
    //*   juld : Julian Day                                 */
    //* Return value:                                       */
    //*   String containing name of weekday                     */
    //***********************************************************************/

    calcDayOfWeek(juld) {
        var A = (juld + 1.5) % 7;
        var DOW = (A == 0) ? "Sunday" : (A == 1) ? "Monday" : (A == 2) ? "Tuesday" : (A == 3) ? "Wednesday" : (A == 4) ? "Thursday" : (A == 5) ? "Friday" : "Saturday";
        return DOW;
    },


    //***********************************************************************/
    //* Name:    calcJD                                 */
    //* Type:    Function                                   */
    //* Purpose: Julian day from calendar day                       */
    //* Arguments:                                      */
    //*   year : 4 digit year                               */
    //*   month: January = 1                                */
    //*   day  : 1 - 31                                 */
    //* Return value:                                       */
    //*   The Julian day corresponding to the date                  */
    //* Note:                                           */
    //*   Number is returned for start of day.  Fractional days should be   */
    //*   added later.                                  */
    //***********************************************************************/

    calcJD(year, month, day) {
        if (month <= 2) {
            year -= 1;
            month += 12;
        }
        var A = Math.floor(year / 100);
        var B = 2 - A + Math.floor(A / 4);

        var JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
        return JD;
    },

    //***********************************************************************/
    //* Name:    calcDayFromJD                              */
    //* Type:    Function                                   */
    //* Purpose: Calendar day (minus year) from Julian Day          */
    //* Arguments:                                      */
    //*   jd   : Julian Day                                 */
    //* Return value:                                       */
    //*   String date in the form DD-MONTH                      */
    //***********************************************************************/

    calcDayFromJD(jd) {

        var monthList = new Array(); // list of months and days for non-leap year
        var i = 0;
        monthList[i++] = new this.month("1", 31, "Jan");
        monthList[i++] = new this.month("2", 28, "Feb");
        monthList[i++] = new this.month("3", 31, "Mar");
        monthList[i++] = new this.month("4", 30, "Apr");
        monthList[i++] = new this.month("5", 31, "May");
        monthList[i++] = new this.month("6", 30, "Jun");
        monthList[i++] = new this.month("7", 31, "Jul");
        monthList[i++] = new this.month("8", 31, "Aug");
        monthList[i++] = new this.month("9", 30, "Sep");
        monthList[i++] = new this.month("10", 31, "Oct");
        monthList[i++] = new this.month("11", 30, "Nov");
        monthList[i++] = new this.month("12", 31, "Dec");
        var z = Math.floor(jd + 0.5);
        var f = (jd + 0.5) - z;
        var A = 0;

        if (z < 2299161) {
            A = z;
        } else {
            var alpha = Math.floor((z - 1867216.25) / 36524.25);
            A = z + 1 + alpha - Math.floor(alpha / 4);
        }

        var B = A + 1524;
        var C = Math.floor((B - 122.1) / 365.25);
        var D = Math.floor(365.25 * C);
        var E = Math.floor((B - D) / 30.6001);

        var day = B - D - Math.floor(30.6001 * E) + f;
        var month = (E < 14) ? E - 1 : E - 13;

        return ((day < 10 ? "0" : "") + day + monthList[month - 1].abbr);
    },


    //***********************************************************************/
    //* Name:    calcTimeJulianCent                         */
    //* Type:    Function                                   */
    //* Purpose: convert Julian Day to centuries since J2000.0.         */
    //* Arguments:                                      */
    //*   jd : the Julian Day to convert                        */
    //* Return value:                                       */
    //*   the T value corresponding to the Julian Day               */
    //***********************************************************************/

    calcTimeJulianCent(jd) {
        var T = (jd - 2451545.0) / 36525.0;
        return T;
    },


    //***********************************************************************/
    //* Name:    calcJDFromJulianCent                           */
    //* Type:    Function                                   */
    //* Purpose: convert centuries since J2000.0 to Julian Day.         */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   the Julian Day corresponding to the t value               */
    //***********************************************************************/

    calcJDFromJulianCent(t) {
        var JD = t * 36525.0 + 2451545.0;
        return JD;
    },


    //***********************************************************************/
    //* Name:    calGeomMeanLongSun                         */
    //* Type:    Function                                   */
    //* Purpose: calculate the Geometric Mean Longitude of the Sun      */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   the Geometric Mean Longitude of the Sun in degrees            */
    //***********************************************************************/

    calcGeomMeanLongSun(t) {
        var L0 = 280.46646 + t * (36000.76983 + 0.0003032 * t);
        while (L0 > 360.0) {
            L0 -= 360.0;
        }
        while (L0 < 0.0) {
            L0 += 360.0;
        }
        return L0;  // in degrees
    },

    //***********************************************************************/
    //* Name:    calGeomAnomalySun                          */
    //* Type:    Function                                   */
    //* Purpose: calculate the Geometric Mean Anomaly of the Sun        */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   the Geometric Mean Anomaly of the Sun in degrees          */
    //***********************************************************************/

    calcGeomMeanAnomalySun(t) {
        var M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
        return M;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcEccentricityEarthOrbit                     */
    //* Type:    Function                                   */
    //* Purpose: calculate the eccentricity of earth's orbit            */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   the unitless eccentricity                         */
    //***********************************************************************/


    calcEccentricityEarthOrbit(t) {
        var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
        return e;   // unitless
    },

    //***********************************************************************/
    //* Name:    calcSunEqOfCenter                          */
    //* Type:    Function                                   */
    //* Purpose: calculate the equation of center for the sun           */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   in degrees                                        */
    //***********************************************************************/


    calcSunEqOfCenter(t) {
        var m = this.calcGeomMeanAnomalySun(t);

        var mrad = this.degToRad(m);
        var sinm = Math.sin(mrad);
        var sin2m = Math.sin(mrad + mrad);
        var sin3m = Math.sin(mrad + mrad + mrad);

        var C = sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) + sin2m * (0.019993 - 0.000101 * t) + sin3m * 0.000289;
        return C;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcSunTrueLong                                */
    //* Type:    Function                                   */
    //* Purpose: calculate the true longitude of the sun                */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun's true longitude in degrees                       */
    //***********************************************************************/


    calcSunTrueLong(t) {
        var l0 = this.calcGeomMeanLongSun(t);
        var c = this.calcSunEqOfCenter(t);

        var O = l0 + c;
        return O;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcSunTrueAnomaly                         */
    //* Type:    Function                                   */
    //* Purpose: calculate the true anamoly of the sun              */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun's true anamoly in degrees                         */
    //***********************************************************************/

    calcSunTrueAnomaly(t) {
        var m = this.calcGeomMeanAnomalySun(t);
        var c = this.calcSunEqOfCenter(t);

        var v = m + c;
        return v;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcSunRadVector                               */
    //* Type:    Function                                   */
    //* Purpose: calculate the distance to the sun in AU                */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun radius vector in AUs                          */
    //***********************************************************************/

    calcSunRadVector(t) {
        var v = this.calcSunTrueAnomaly(t);
        var e = this.calcEccentricityEarthOrbit(t);

        var R = (1.000001018 * (1 - e * e)) / (1 + e * Math.cos(this.degToRad(v)));
        return R;   // in AUs
    },

    //***********************************************************************/
    //* Name:    calcSunApparentLong                            */
    //* Type:    Function                                   */
    //* Purpose: calculate the apparent longitude of the sun            */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun's apparent longitude in degrees                       */
    //***********************************************************************/

    calcSunApparentLong(t) {
        var o = this.calcSunTrueLong(t);

        var omega = 125.04 - 1934.136 * t;
        var lambda = o - 0.00569 - 0.00478 * Math.sin(this.degToRad(omega));
        return lambda;  // in degrees
    },

    //***********************************************************************/
    //* Name:    calcMeanObliquityOfEcliptic                        */
    //* Type:    Function                                   */
    //* Purpose: calculate the mean obliquity of the ecliptic           */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   mean obliquity in degrees                         */
    //***********************************************************************/

    calcMeanObliquityOfEcliptic(t) {
        var seconds = 21.448 - t * (46.8150 + t * (0.00059 - t * (0.001813)));
        var e0 = 23.0 + (26.0 + (seconds / 60.0)) / 60.0;
        return e0;  // in degrees
    },

    //***********************************************************************/
    //* Name:    calcObliquityCorrection                        */
    //* Type:    Function                                   */
    //* Purpose: calculate the corrected obliquity of the ecliptic      */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   corrected obliquity in degrees                        */
    //***********************************************************************/

    calcObliquityCorrection(t) {
        var e0 = this.calcMeanObliquityOfEcliptic(t);

        var omega = 125.04 - 1934.136 * t;
        var e = e0 + 0.00256 * Math.cos(this.degToRad(omega));
        return e;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcSunRtAscension                         */
    //* Type:    Function                                   */
    //* Purpose: calculate the right ascension of the sun               */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun's right ascension in degrees                      */
    //***********************************************************************/

    calcSunRtAscension(t) {
        var e = this.calcObliquityCorrection(t);
        var lambda = this.calcSunApparentLong(t);

        var tananum = (Math.cos(this.degToRad(e)) * Math.sin(this.degToRad(lambda)));
        var tanadenom = (Math.cos(this.degToRad(lambda)));
        var alpha = this.radToDeg(Math.atan2(tananum, tanadenom));
        return alpha;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcSunDeclination                         */
    //* Type:    Function                                   */
    //* Purpose: calculate the declination of the sun               */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   sun's declination in degrees                          */
    //***********************************************************************/

    calcSunDeclination(t) {
        var e = this.calcObliquityCorrection(t);
        var lambda = this.calcSunApparentLong(t);

        var sint = Math.sin(this.degToRad(e)) * Math.sin(this.degToRad(lambda));
        var theta = this.radToDeg(Math.asin(sint));
        return theta;   // in degrees
    },

    //***********************************************************************/
    //* Name:    calcEquationOfTime                         */
    //* Type:    Function                                   */
    //* Purpose: calculate the difference between true solar time and mean  */
    //*     solar time                                  */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //* Return value:                                       */
    //*   equation of time in minutes of time                       */
    //***********************************************************************/

    calcEquationOfTime(t) {
        var epsilon = this.calcObliquityCorrection(t);
        var l0 = this.calcGeomMeanLongSun(t);
        var e = this.calcEccentricityEarthOrbit(t);
        var m = this.calcGeomMeanAnomalySun(t);

        var y = Math.tan(this.degToRad(epsilon) / 2.0);
        y *= y;

        var sin2l0 = Math.sin(2.0 * this.degToRad(l0));
        var sinm = Math.sin(this.degToRad(m));
        var cos2l0 = Math.cos(2.0 * this.degToRad(l0));
        var sin4l0 = Math.sin(4.0 * this.degToRad(l0));
        var sin2m = Math.sin(2.0 * this.degToRad(m));

        var Etime = y * sin2l0 - 2.0 * e * sinm + 4.0 * e * y * sinm * cos2l0
            - 0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;

        return this.radToDeg(Etime) * 4.0; // in minutes of time
    },

    //***********************************************************************/
    //* Name:    calcHourAngleSunrise                           */
    //* Type:    Function                                   */
    //* Purpose: calculate the hour angle of the sun at sunrise for the */
    //*         latitude                                */
    //* Arguments:                                      */
    //*   lat : latitude of observer in degrees                 */
    //* solarDec : declination angle of sun in degrees              */
    //* Return value:                                       */
    //*   hour angle of sunrise in radians                      */
    //***********************************************************************/

    calcHourAngleSunrise(lat, solarDec) {
        var latRad = this.degToRad(lat);
        var sdRad = this.degToRad(solarDec)
        var HA = (Math.acos(Math.cos(this.degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad)));

        return HA;  // in radians
    },

    //***********************************************************************/
    //* Name:    calcHourAngleSunset                            */
    //* Type:    Function                                   */
    //* Purpose: calculate the hour angle of the sun at sunset for the  */
    //*         latitude                                */
    //* Arguments:                                      */
    //*   lat : latitude of observer in degrees                 */
    //* solarDec : declination angle of sun in degrees              */
    //* Return value:                                       */
    //*   hour angle of sunset in radians                       */
    //***********************************************************************/

    calcHourAngleSunset(lat, solarDec) {
        var latRad = this.degToRad(lat);
        var sdRad = this.degToRad(solarDec)
        var HA = (Math.acos(Math.cos(this.degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad)));

        return -HA;     // in radians
    },


    //***********************************************************************/
    //* Name:    calcSunriseUTC                             */
    //* Type:    Function                                   */
    //* Purpose: calculate the Universal Coordinated Time (UTC) of sunrise  */
    //*         for the given day at the given location on earth    */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   time in minutes from zero Z                           */
    //***********************************************************************/

    calcSunriseUTC(JD, latitude, longitude) {
        var t = this.calcTimeJulianCent(JD);

        // *** First pass to approximate sunrise

        var eqTime = this.calcEquationOfTime(t);
        var solarDec = this.calcSunDeclination(t);
        var hourAngle = this.calcHourAngleSunrise(latitude, solarDec);

        var delta = longitude - this.radToDeg(hourAngle);
        var timeDiff = 4 * delta; // in minutes of time
        var timeUTC = 720 + timeDiff - eqTime; // in minutes

        // alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

        // *** Second pass includes fractional jday in gamma calc

        var newt = this.calcTimeJulianCent(this.calcJDFromJulianCent(t) + timeUTC / 1440.0);
        eqTime = this.calcEquationOfTime(newt);
        solarDec = this.calcSunDeclination(newt);
        hourAngle = this.calcHourAngleSunrise(latitude, solarDec);
        delta = longitude - this.radToDeg(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes

        // alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

        return timeUTC;
    },

    //***********************************************************************/
    //* Name:    calcSolNoonUTC                             */
    //* Type:    Function                                   */
    //* Purpose: calculate the Universal Coordinated Time (UTC) of solar    */
    //*     noon for the given day at the given location on earth       */
    //* Arguments:                                      */
    //*   t : number of Julian centuries since J2000.0              */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   time in minutes from zero Z                           */
    //***********************************************************************/

    calcSolNoonUTC(t, longitude) {
        var eqTime = this.calcEquationOfTime(t);
        var solNoonUTC = 720 + (longitude * 4) - eqTime; // min

        return solNoonUTC;
    },

    //***********************************************************************/
    //* Name:    calcSunsetUTC                              */
    //* Type:    Function                                   */
    //* Purpose: calculate the Universal Coordinated Time (UTC) of sunset   */
    //*         for the given day at the given location on earth    */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   time in minutes from zero Z                           */
    //***********************************************************************/

    calcSunsetUTC(JD, latitude, longitude) {
        var t = this.calcTimeJulianCent(JD);

        // First calculates sunrise and approx length of day

        var eqTime = this.calcEquationOfTime(t);
        var solarDec = this.calcSunDeclination(t);
        var hourAngle = this.calcHourAngleSunset(latitude, solarDec);

        var delta = longitude - this.radToDeg(hourAngle);
        var timeDiff = 4 * delta;
        var timeUTC = 720 + timeDiff - eqTime;

        // first pass used to include fractional day in gamma calc

        var newt = this.calcTimeJulianCent(this.calcJDFromJulianCent(t) + timeUTC / 1440.0);
        eqTime = this.calcEquationOfTime(newt);
        solarDec = this.calcSunDeclination(newt);
        hourAngle = this.calcHourAngleSunset(latitude, solarDec);

        delta = longitude - this.radToDeg(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes

        return timeUTC;
    },

    // Returns the decimal latitude from the degrees, minutes and seconds entered
    // into the form

    getLatitude(latLongForm) {
        var neg = 0;
        var degs = parseFloat(latLongForm["latDeg"].value);
        if (latLongForm["latDeg"].value[0] == '-') {
            neg = 1;
        }

        var mins = parseFloat(latLongForm["latMin"].value);

        var secs = parseFloat(latLongForm["latSec"].value);

        var decLat = 0;

        if (neg != 1) {
            decLat = degs + (mins / 60) + (secs / 3600);
        }
        else if (neg == 1) {
            decLat = degs - (mins / 60) - (secs / 3600);
        } else {
            return -9999;
        }
        return decLat;
    },

    // Returns the decimal longitude from the degrees, minutes and seconds entered
    // into the form

    getLongitude(latLongForm) {
        var neg = 0;
        var degs = parseFloat(latLongForm["lonDeg"].value);
        if (latLongForm["lonDeg"].value[0] == '-') {
            neg = 1;
        }
        var mins = parseFloat(latLongForm["lonMin"].value);
        var secs = parseFloat(latLongForm["lonSec"].value);
        var decLon = degs + (mins / 60) + (secs / 3600);

        if (neg != 1) {
            decLon = degs + (mins / 60) + (secs / 3600);
        } else if (neg == 1) {
            decLon = degs - (mins / 60) - (secs / 3600);
        } else {
            return -9999;
        }
        return decLon;
    },

    //***********************************************************************/
    //* Name:    findRecentSunrise                          */
    //* Type:    Function                                   */
    //* Purpose: calculate the julian day of the most recent sunrise        */
    //*     starting from the given day at the given location on earth  */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   julian day of the most recent sunrise                 */
    //***********************************************************************/

    findRecentSunrise(jd, latitude, longitude) {
        var julianday = jd;

        var time = this.calcSunriseUTC(julianday, latitude, longitude);
        while (!this.isNumber(time)) {
            julianday -= 1.0;
            time = this.calcSunriseUTC(julianday, latitude, longitude);
        }

        return julianday;
    },


    //***********************************************************************/
    //* Name:    findRecentSunset                               */
    //* Type:    Function                                   */
    //* Purpose: calculate the julian day of the most recent sunset     */
    //*     starting from the given day at the given location on earth  */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   julian day of the most recent sunset                  */
    //***********************************************************************/

    findRecentSunset(jd, latitude, longitude) {
        var julianday = jd;

        var time = this.calcSunsetUTC(julianday, latitude, longitude);
        while (!this.isNumber(time)) {
            julianday -= 1.0;
            time = this.calcSunsetUTC(julianday, latitude, longitude);
        }

        return julianday;
    },


    //***********************************************************************/
    //* Name:    findNextSunrise                                */
    //* Type:    Function                                   */
    //* Purpose: calculate the julian day of the next sunrise           */
    //*     starting from the given day at the given location on earth  */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   julian day of the next sunrise                        */
    //***********************************************************************/

    findNextSunrise(jd, latitude, longitude) {
        var julianday = jd;

        var time = this.calcSunriseUTC(julianday, latitude, longitude);
        while (!this.isNumber(time)) {
            julianday += 1.0;
            time = this.calcSunriseUTC(julianday, latitude, longitude);
        }

        return julianday;
    },

    //***********************************************************************/
    //* Name:    findNextSunset                             */
    //* Type:    Function                                   */
    //* Purpose: calculate the julian day of the next sunset            */
    //*     starting from the given day at the given location on earth  */
    //* Arguments:                                      */
    //*   JD  : julian day                                  */
    //*   latitude : latitude of observer in degrees                */
    //*   longitude : longitude of observer in degrees              */
    //* Return value:                                       */
    //*   julian day of the next sunset                         */
    //***********************************************************************/

    findNextSunset(jd, latitude, longitude) {
        var julianday = jd;

        var time = this.calcSunsetUTC(julianday, latitude, longitude);
        while (!this.isNumber(time)) {
            julianday += 1.0;
            time = this.calcSunsetUTC(julianday, latitude, longitude);
        }

        return julianday;
    },

    //***********************************************************************/
    //* Name:    timeString                                 */
    //* Type:    Function                                   */
    //* Purpose: convert time of day in minutes to a zero-padded string */
    //*     suitable for printing to the form text fields           */
    //* Arguments:                                      */
    //*   minutes : time of day in minutes                      */
    //* Return value:                                       */
    //*   string of the format HH:MM:SS, minutes and seconds are zero padded*/
    //***********************************************************************/

    timeString(minutes)
    // timeString returns a zero-padded string (HH:MM:SS) given time in minutes
    {
        var floatHour = minutes / 60;
        var hour = Math.floor(floatHour);
        var floatMinute = 60 * (floatHour - Math.floor(floatHour));
        var minute = Math.floor(floatMinute);
        var floatSec = 60 * (floatMinute - Math.floor(floatMinute));
        var second = Math.floor(floatSec);

        var timeStr = hour + ":";
        if (minute < 10)    //  i.e. only one digit
            timeStr += "0" + minute + ":";
        else
            timeStr += minute + ":";
        if (second < 10)    //  i.e. only one digit
            timeStr += "0" + second;
        else
            timeStr += second;

        return timeStr;
    },

    //***********************************************************************/
    //* Name:    timeStringShortAMPM                            */
    //* Type:    Function                                   */
    //* Purpose: convert time of day in minutes to a zero-padded string */
    //*     suitable for printing to the form text fields.  If time */
    //*     crosses a day boundary, date is appended.               */
    //* Arguments:                                      */
    //*   minutes : time of day in minutes                      */
    //*   JD  : julian day                                  */
    //* Return value:                                       */
    //*   string of the format HH:MM[AM/PM] (DDMon)                 */
    //***********************************************************************/

    // timeStringShortAMPM returns a zero-padded string (HH:MM *M) given time in
    // minutes and appends short date if time is > 24 or < 0, resp.

    timeStringShortAMPM(minutes, JD) {
        var julianday = JD;
        var floatHour = minutes / 60;
        var hour = Math.floor(floatHour);
        var floatMinute = 60 * (floatHour - Math.floor(floatHour));
        var minute = Math.floor(floatMinute);
        var floatSec = 60 * (floatMinute - Math.floor(floatMinute));
        var second = Math.floor(floatSec);

        minute += (second >= 30) ? 1 : 0;

        if (minute >= 60) {
            minute -= 60;
            hour++;
        }

        var daychange = false;
        if (hour > 23) {
            hour -= 24;
            daychange = true;
            julianday += 1.0;
        }

        if (hour < 0) {
            hour += 24;
            daychange = true;
            julianday -= 1.0;
        }

        //if (hour > 11)
        //      {
        //          hour -= 12;
        //          PM = true;
        //      }

        if (hour == 0) {
            hour = 12;
        }

        var timeStr = hour + ":";
        if (minute < 10)    //  i.e. only one digit
            timeStr += "0" + minute; //+ ((PM)?"PM":"AM");
        else
            timeStr += "" + minute; // + ((PM)?"PM":"AM");

        if (daychange) return timeStr + " " + this.calcDayFromJD(julianday);
        return timeStr;
    },

    //***********************************************************************/
    //* Name:    timeStringAMPMDate                         */
    //* Type:    Function                                   */
    //* Purpose: convert time of day in minutes to a zero-padded string */
    //*     suitable for printing to the form text fields, and appends  */
    //*     the date.                                   */
    //* Arguments:                                      */
    //*   minutes : time of day in minutes                      */
    //*   JD  : julian day                                  */
    //* Return value:                                       */
    //*   string of the format HH:MM[AM/PM] DDMon                   */
    //***********************************************************************/

    // timeStringAMPMDate returns a zero-padded string (HH:MM[AM/PM]) given time
    // in minutes and julian day, and appends the short date

    timeStringAMPMDate(minutes, JD) {
        var julianday = JD;
        var floatHour = minutes / 60;
        var hour = Math.floor(floatHour);
        var floatMinute = 60 * (floatHour - Math.floor(floatHour));
        var minute = Math.floor(floatMinute);
        var floatSec = 60 * (floatMinute - Math.floor(floatMinute));
        var second = Math.floor(floatSec);

        minute += (second >= 30) ? 1 : 0;

        if (minute >= 60) {
            minute -= 60;
            hour++;
        }

        if (hour > 23) {
            hour -= 24;
            julianday += 1.0;
        }

        if (hour < 0) {
            hour += 24;
            julianday -= 1.0;
        }

        var PM = false;
        if (hour > 11) {
            hour -= 12;
            PM = true;
        }

        if (hour == 0) {
            PM = false;
            hour = 12;
        }

        var timeStr = hour + ":";
        if (minute < 10)    //  i.e. only one digit
            timeStr += "0" + minute + ((PM) ? "PM" : "AM");
        else
            timeStr += minute + ((PM) ? "PM" : "AM");

        return timeStr + " " + this.calcDayFromJD(julianday);
    },

    //***********************************************************************/
    //* Name:    timeStringDate                             */
    //* Type:    Function                                   */
    //* Purpose: convert time of day in minutes to a zero-padded 24hr time  */
    //*     suitable for printing to the form text fields.  If time */
    //*     crosses a day boundary, date is appended.               */
    //* Arguments:                                      */
    //*   minutes : time of day in minutes                      */
    //*   JD  : julian day                                  */
    //* Return value:                                       */
    //*   string of the format HH:MM (DDMon)                        */
    //***********************************************************************/

    // timeStringDate returns a zero-padded string (HH:MM) given time in minutes
    // and julian day, and appends the short date if time crosses a day boundary

    timeStringDate(minutes, JD) {
        var julianday = JD;
        var floatHour = minutes / 60;
        var hour = Math.floor(floatHour);
        var floatMinute = 60 * (floatHour - Math.floor(floatHour));
        var minute = Math.floor(floatMinute);
        var floatSec = 60 * (floatMinute - Math.floor(floatMinute));
        var second = Math.floor(floatSec);

        minute += (second >= 30) ? 1 : 0;

        if (minute >= 60) {
            minute -= 60;
            hour++;
        }

        var daychange = false;
        if (hour > 23) {
            hour -= 24;
            julianday += 1.0;
            daychange = true;
        }

        if (hour < 0) {
            hour += 24;
            julianday -= 1.0;
            daychange = true;
        }

        var timeStr = hour + ":";
        if (minute < 10)    //  i.e. only one digit
            timeStr += "0" + minute;
        else
            timeStr += minute;

        if (daychange) return timeStr + " " + this.calcDayFromJD(julianday);
        return timeStr;
    },
    calcnew(type, latitude, longitude) {
        let now = new Date();
        let year = now.getFullYear();
        let mos = now.getMonth(); 
        let day = now.getDate(); 
        longitude = -parseFloat(longitude); //getLongitude(latLongForm);
        var JD = (this.calcJD(parseFloat(year), parseFloat(mos), parseFloat(day)));

        var riseTimeGMT = this.calcSunriseUTC(JD, latitude, longitude);

        // Calculate sunset for this date
        // if no sunset is found, set flag nosunset

        var setTimeGMT = this.calcSunsetUTC(JD, latitude, longitude);
        var riseStr = this.timeStringShortAMPM(riseTimeGMT, JD);
        var setStr = this.timeStringShortAMPM(setTimeGMT, JD);

        //return sunrise
        if (type == 1) {
            //var arr1 = riseStr.split(":");
            return riseStr;
        }
        //return sunset
        else if (type == 2) {
            //var arr2 = setStr.split(":");
            return setStr;
        }
    },
}
