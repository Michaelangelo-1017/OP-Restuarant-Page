const loadPage = function(){
    const openingHours = ["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"];

    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    title.innerText = "Mi Angelo Restaurant";
    contentDiv.appendChild(title);
    const introDiv = document.createElement("div");
    introDiv.setAttribute("class","info-cont");
    const introSVG = document.createElement("svg");
    introSVG.innerHTML = `<title>bird</title><path d="M23 11.5L19.95 10.37C19.69 9.22 19.04 8.56 19.04 8.56C17.4 6.92 14.75 6.92 13.11 8.56L11.63 10.04L5 3C4 7 5 11 7.45 14.22L2 19.5C2 19.5 10.89 21.5 16.07 17.45C18.83 15.29 19.45 14.03 19.84 12.7L23 11.5M17.71 11.72C17.32 12.11 16.68 12.11 16.29 11.72C15.9 11.33 15.9 10.7 16.29 10.31C16.68 9.92 17.32 9.92 17.71 10.31C18.1 10.7 18.1 11.33 17.71 11.72Z" />`;
    introSVG.setAttribute("viewBox","0 0 24 24");
    introSVG.setAttribute("xlmns","http://www.w3.org/2000/svg");
    introSVG.id = "intro-bird";
    introDiv.appendChild(introSVG);
    const introDivP = document.createElement("p");
    introDivP.innerText = "Mi Angelo has the best fruit bowl and pastries! The atmosphere and customer service is heavenly and the actual food are dekicious enough to die and reincarnate for! This is definitely the kind of place fit for an angel.";
    const introDivPName = document.createElement("p");
    introDivPName.innerText = "- Michaelangelo"
    introDivPName.setAttribute("class","reviewer");
    introDiv.appendChild(introDivP);
    introDiv.appendChild(introDivPName);
    contentDiv.appendChild(introDiv);
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("class","info-cont");
    const hoursDivH2 = document.createElement("h2");
    hoursDivH2.innerText = "Opening Hours";
    hoursDiv.appendChild(hoursDivH2);
    openingHours.forEach((day)=>{
        const hoursDivP = document.createElement("p");
        hoursDivP.innerText = day;
        hoursDiv.appendChild(hoursDivP);
    })
    contentDiv.appendChild(hoursDiv);
    const locationDiv = document.createElement("div");
    locationDiv.setAttribute("class","info-cont")
    const locationDivH2 = document.createElement("h2");
    locationDivH2.innerText = "Location";
    locationDiv.appendChild(locationDivH2);
    const locationDivP = document.createElement("p");
    locationDivP.innerText = "71-75 Houghton Street, Los Angeles, England.";
    locationDiv.appendChild(locationDivP);
    contentDiv.appendChild(locationDiv);
}

export default loadPage;