let dog = {
    name: "George",
      numLegs: 4
    };

    let dog = {
        name: "Spot",
        numLegs: 4
      };
      // Only change code below this line
      console.log(dog.name);
      console.log(dog.numLegs);

      let dog = {
        name: "Spot",
        numLegs: 4,
         sayLegs: function() {
          return "This dog has " + dog.numLegs + " legs.";
        }
      };
      
      dog.sayLegs();

      let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {
          return "This dog has " + this.numLegs + " legs.";
        }
      };
      
      dog.sayLegs();

      function Dog() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2; }

        function Dog() {
            this.name = "Rupert";
            this.color = "brown";
            this.numLegs = 4;
          }
        
          let hound = new Dog();

          function Dog(name, color) {
            this.name = name;
            this.color = color;
            this.numLegs = 4;
          }
          let terrier = new Dog("Chloe", "Blue");

          function House(numBedrooms) {
            this.numBedrooms = numBedrooms;
          }
          
          let myHouse = new House(4);
          myHouse instanceof House;
          
          function Bird(name) {
            this.name = name;
            this.numLegs = 2;
          }
          
          let canary = new Bird("Tweety");
          let ownProps = [];
          for (let property in canary) {
            if (canary.hasOwnProperty(property)) {
              ownProps.push(property);
            }
          }    
          
          function Dog(name) {
            this.name = name;
          }
          
          Dog.prototype.numLegs = 4;
          let beagle = new Dog("Snoopy");


      