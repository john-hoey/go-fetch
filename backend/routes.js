"use strict";
//require the Express module
const express = require("express");

//creates a new router object
const routes = express.Router();

const baseURL = "http://swapi.dev/api/planets/";

const planets = [
  { id: 1, name: "Tatooine", url: baseURL + "1" },
  { id: 2, name: "Alderaan", url: baseURL + "2" },
  { id: 3, name: "Yavin IV", url: baseURL + "3" },
  { id: 4, name: "Hoth", url: baseURL + "4" },
  { id: 5, name: "Dagobah", url: baseURL + "5" },
  { id: 6, name: "Bespin", url: baseURL + "6" },
  { id: 7, name: "Endor", url: baseURL + "7" },
  { id: 8, name: "Naboo", url: baseURL + "8" },
  { id: 9, name: "Coruscant", url: baseURL + "9" },
  { id: 10, name: "Kamino", url: baseURL + "10" },
  { id: 11, name: "Geonosis", url: baseURL + "11" },
  { id: 12, name: "Utapau", url: baseURL + "12" },
  { id: 13, name: "Mustafar", url: baseURL + "13" },
  { id: 14, name: "Kashyyyk", url: baseURL + "14" },
  { id: 15, name: "Polis Massa", url: baseURL + "15" },
  { id: 16, name: "Mygeeto", url: baseURL + "60" },
  { id: 17, name: "Felucia", url: baseURL + "16" },
  { id: 18, name: "Cato Neimoidia", url: baseURL + "17" },
  { id: 19, name: "Saleucami", url: baseURL + "18" },
  { id: 20, name: "Stewjon", url: baseURL + "19" },
  { id: 21, name: "Eriadu", url: baseURL + "20" },
  { id: 22, name: "Rodia", url: baseURL + "21" },
  { id: 23, name: "Nal Hutta", url: baseURL + "22" },
  { id: 24, name: "Dantooine", url: baseURL + "23" },
  { id: 25, name: "Bestine IV", url: baseURL + "24" },
  { id: 26, name: "Ord Mantell", url: baseURL + "25" },
  { id: 27, name: "unknown", url: baseURL + "26" },
  { id: 28, name: "Trandosha", url: baseURL + "27" },
  { id: 29, name: "Socorro", url: baseURL + "28" },
  { id: 30, name: "Mon Cala", url: baseURL + "29" },
  { id: 31, name: "Chandrila", url: baseURL + "30" },
  { id: 32, name: "Sullust", url: baseURL + "31" },
  { id: 33, name: "Toydaria", url: baseURL + "32" },
  { id: 34, name: "Malastare", url: baseURL + "33" },
  { id: 35, name: "Dathomir", url: baseURL + "34" },
  { id: 36, name: "Ryloth", url: baseURL + "35" },
  { id: 37, name: "Aleen Minor", url: baseURL + "36" },
  { id: 38, name: "Vulpter", url: baseURL + "37" },
  { id: 39, name: "Troiken", url: baseURL + "38" },
  { id: 40, name: "Tund", url: baseURL + "39" },
  { id: 41, name: "Haruun Kal", url: baseURL + "40" },
  { id: 42, name: "Cerea", url: baseURL + "41" },
  { id: 43, name: "Glee Anselm", url: baseURL + "43" },
  { id: 44, name: "Iridonia", url: baseURL + "44" },
  { id: 45, name: "Tholoth", url: baseURL + "45" },
  { id: 46, name: "Iktotch", url: baseURL + "46" },
  { id: 47, name: "Quermia", url: baseURL + "47" },
  { id: 48, name: "Dorin", url: baseURL + "48" },
  { id: 49, name: "Champala", url: baseURL + "49" },
  { id: 50, name: "Mirial", url: baseURL + "50" },
  { id: 51, name: "Serenno", url: baseURL + "51" },
  { id: 52, name: "Concord Dawn", url: baseURL + "52" },
  { id: 53, name: "Zolan", url: baseURL + "53" },
  { id: 54, name: "Ojom", url: baseURL + "54" },
  { id: 55, name: "Skako", url: baseURL + "55" },
  { id: 56, name: "Muunilinst", url: baseURL + "56" },
  { id: 57, name: "Shili", url: baseURL + "57" },
  { id: 58, name: "Kalee", url: baseURL + "58" },
  { id: 59, name: "Umbara", url: baseURL + "59" },
];

routes.get("/movies/:id", (req, res) => {
  let foundPlanet = planets.find((item) => {
    return item.id === id;
  });
});
console.log(planets);

//export routes for use in server.js
module.exports = routes;
