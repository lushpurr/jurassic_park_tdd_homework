const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur("T Rex", "Carnivore", 100)
    dinosaur2 = new Dinosaur("Brontosaurus", "Herbivore", 50)
    dinosaur3 = new Dinosaur("Velociraptor", "Carnivore", 150)
    park = new Park('Jurassic Park', 10, []);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = park.collectionOfDinosaurs;
    assert.deepStrictEqual(expected, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1];
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  
    const expected = dinosaur3;
    const actual = park.findMostVisitedDinosaur();
    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = [dinosaur2];
    const actual = park.findDinosaurBySpecies('Brontosaurus');
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(300, actual);
  });



  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(109500, actual)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(1095000, actual)
  });


});
