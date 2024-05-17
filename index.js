import ICAL from "ical.js";
const data = "...some ical data";
const jCalData = ICAL.parse(data);
const comp = new ICAL.Component(jCalData, null);