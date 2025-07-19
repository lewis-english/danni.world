/* Place your JavaScript in this file */
/*data*/
/* const myArray = ["0","1","2"]*/
const d = new Date()
const da = d.getDay()
const day = da + 3
const dataArray = ["","","","","","","","","","","","","","","","","","","","","","","FLHPEDWOAPKAREBYANSRINCNPTEETIRDHIHLSEAEGOENTYVE","","","","","","","",""]
const themeArray = ["theme1","theme2","theme3","theme4","theme5","theme6","theme7","theme8","theme9","theme10","theme11","theme12","theme13","theme14","theme15","theme16","theme17","theme18","theme19","theme20","theme21","theme22","I Wish You A","Last Night","I Got A Thing..","Remember When?","It's Raining...","You Can Call Me Al","55 Burgers 55 Fries","Let's Take A Trip Down","theme31"]
const wordArray = [[""],[""],[""],[""],[""],[""], [""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],["HAPPYBIRTHDAY","CAKE","LOVE","FLOWERS","PRESENT","EIGHTEEN","DANNI"],[""],[""],[""],[""],[""],[""],[""],[""]]
var todaysTheme = themeArray[day]
var todaysData = dataArray[day]
var todaysWords = wordArray[day]
var letterArray = todaysData.split("")
themeName = document.getElementById("gameName")
themeName.innerHTML = todaysTheme
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 48; i++) {
        const element = document.getElementById(`l${i + 1}`);
        if (element) {
            element.textContent = letterArray[i];
        }
    }
});
