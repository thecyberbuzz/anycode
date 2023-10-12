const month = document.querySelector(".inner-month");
const fulldate = document.querySelector(".inner-data");
const datesDiv = document.querySelector(".dates");
const months = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];
const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const dateSys = new Date;
month.innerText = months[dateSys.getMonth()];
fulldate.innerText = dateSys.toString().slice(0,15);
function createEmpty(element){
    const empty = document.createElement("div");
    empty.classList.add("empty");
    element.append(empty);
};
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
 
function totalDay() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let totalDays = daysInMonth(month, year);
    return totalDays;
}
function createDate(index,element,dateSys){
    const date = document.createElement("div");
    date.classList.add("select");
    date.innerText = index;
    if(dateSys.getDate()==index){
        date.classList.add("selected");
    };
    element.append(date);
};
function indexBlock(index,element){
    for(let i = 0;i<index;i++){
        createEmpty(element);
    };
};
let index;
function updateIndex(){
    var firstDay = new Date(dateSys.getFullYear(), dateSys.getMonth(), 1).toString().slice(0,3);
    days.forEach((day)=>{
        if(day == firstDay){
            index=days.indexOf(day);
        };
    });
};
function execute(){
    updateIndex();
    indexBlock(index,datesDiv);
    for(let i=1;i<=totalDay();i++){
        createDate(i,datesDiv,dateSys);
    };
};
execute()
