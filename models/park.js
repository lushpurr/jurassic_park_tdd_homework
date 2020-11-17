const Park = function (name, ticketPrice) {
this.name = name;
this.ticketPrice = ticketPrice;
this.collectionOfDinosaurs = [];


};

Park.prototype.addDinosaur = function (dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
};


Park.prototype.findMostVisitedDinosaur = function () {
    let mostVisitorsPerDay = 0
    let mostVisitedDinosaur = null;
    
    for (const dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostVisitorsPerDay) {
            mostVisitorsPerDay = dinosaur.guestsAttractedPerDay;
            mostVisitedDinosaur = dinosaur;
        };
    
        
};
return mostVisitedDinosaur;

};

// alt one liner to above 
// let mostAttractiveSpecies = this.collectionOfDinosaurs.sort((a,b)=>a.guestsAttractedPerDay>b.guestsAttractedPerDay?-1:1)[0];

Park.prototype.findDinosaurBySpecies = function  (species) {
    let dinosaursBySpecies = []

    for (const dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species === species) {
            dinosaursBySpecies.push(dinosaur);
        };
    
        
};
return dinosaursBySpecies;






    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(species);

}
Park.prototype.totalVisitorsPerDay = function () {
    total = 0;
    for (const dinosaur of this.collectionOfDinosaurs){
    total += dinosaur.guestsAttractedPerDay;
}
return total;
};

Park.prototype.totalVisitorsPerYear = function () {
    total = this.totalVisitorsPerDay() * 365;
    return total;
};

Park.prototype.totalRevenuePerYear = function (){
    total = this.totalVisitorsPerYear() * this.ticketPrice;
    return total;
};



module.exports = Park;
