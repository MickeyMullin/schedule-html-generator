import { load } from 'cheerio'

// need structure ("venue" or "event"):
//  * tracks/rooms
//      - color codes
//  * days; day names (for h2, anchor)
//  * most granular timeslots
//  * ferret out unnecessary timeslots
//  * event name (for h1)

// need usage ("schedule")
//  * TBD

const $ = load('<h1>Schedule</h1>')

$('h1.title').text('Ima Title')
$('h1').addClass('classy')

$.html();

console.log($.html())
