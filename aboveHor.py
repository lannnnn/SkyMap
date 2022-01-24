## this script will find the sunset and sunrise time
from skyfield.api import N, Star, W, wgs84, load
from skyfield.almanac import find_discrete, risings_and_settings
from pytz import timezone

ts = load.timescale()
t0 = ts.utc(2021, 1, 25)

moab = wgs84.latlon(38.5725 * N, 109.54972238 * W)
eph = load('de421.bsp')
gc = Star(ra_hours=(17, 45, 40.04), dec_degrees=(-29, 0, 28.1))

f = risings_and_settings(eph, gc, moab)
tz = timezone('US/Mountain')

for t, updown in zip(*find_discrete(t0, f)):
    print(t.astimezone(tz).strftime('%a %d %H:%M'), 'MST',
          'rises' if updown else 'sets')
