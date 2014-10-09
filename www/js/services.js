angular.module('classDataService', [])

/*RETRIVE CLASS INFORMATION*/
.factory('classesFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var classes = [
    { id: 0, yogaType: 'Hot Yoga', teacherId: '0', time:'6 pm' , location:'Adam\'s Morgan', year:"2014", month:"10" , day:12, mine:'y' },
    { id: 1, yogaType: 'Ashtanga Yoga', teacherId: '1', time: '8 pm' , location:'Dupont' , year:"2014", month:"10" , day:12, mine:'n'  },
    { id: 2, yogaType: 'Power Yoga', teacherId: '2', time: '9 pm' , location:'Tenley' , year:"2014", month:"10" , day:12, mine:'n'  },
     { id: 2, yogaType: 'Power Yoga', teacherId: '3', time: '9 am' , location:'H Street' , year:"2014", month:"12" , day:1, mine:'y'  },
    { id: 4, yogaType: 'Kundalini Yoga', teacherId: '4', time: '12 pm' , location:'Shaw' , year:"2014", month:"11" , day:1, mine:'n'  },
    { id: 5, yogaType: 'Hot Yoga', teacherId: '9', time: '3 pm', location:'Columbia Heights' , year:"2014", month:"10" , day:9, mine:'y'  },
    { id: 6, yogaType: 'Ashtanga Yoga', teacherId: '1', time: '8 am' , location:'Rosslyn' , year:"2014", month:"10" , day:10, mine:'n'  },
    { id: 7, yogaType: 'Power Yoga', teacherId: '7', time: '10am' , location:'DaSpot' , year:"2014", month:"10" , day:10, mine:'n'  },
     { id: 8, yogaType: 'Power Yoga', teacherId: '3', time: '4:30 pm' , location:'DaPlace' , year:"2014", month:"10" , day:10, mine:'y'  },
    { id: 9, yogaType: 'Kundalini Yoga', teacherId: '4', time: '5pm', location:'DaLocation', year:"2014", month:"10" , day:10, mine:'y'   }
  ];

  return {
    all: function() {
      return classes;
    },
    get: function(classId) {
      // Simple index lookup
      return classes[classId];
    }
  };
});

/*RETRIEVE PERSON INFORMATION*/
angular.module('personDataService', [])
.factory('personFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var people = [
    { id: 0, Person: {firstName:'Paula', lastName:'Pavlova'}, location: "DC"},
    { id: 1, Person: {firstName: 'Diplo', lastName: ' Weasly'}, location: 'Austin'  },
    { id: 2, Person: {firstName: 'Suzzie', lastName: ' Suzzington'}, location: 'LA'  },
     { id: 3, Person: {firstName: 'Timmy', lastName: ' Timmeington'}, location: 'DC'  },
    { id: 4, Person: {firstName: 'Andy', lastName: ' Anditon'}, location: 'DC'  },
    { id: 5, Person: {firstName: 'James', lastName: ' Peach'}, location: 'LA' },
    { id: 6, Person: {firstName: 'Joe', lastName: ' Apple'}, location: 'DC'  },
    { id: 7, Person: {firstName: 'Leonard', lastName: ' MiLeonard'}, location: 'Austin'  },
     { id: 8, Person: {firstName: 'Becky', lastName: ' Banana'}, location: 'DC'  },
    { id: 9, Person: {firstName: 'Jane', lastName: ' Juice'}, location: 'Austin'  },
    { id: 10, Person: {firstName: 'The', lastName: ' Dude'}, location: 'NY'  }
  ];

  return {
    all: function() {
      return people;
    },
    get: function(personId) {
      // Simple index lookup
      return people[personId];
    }
  };
});

/*Handle date and time information*/
angular.module('dateTimeService', [])
.factory('dateTimeFactory', function() {
  
  return {
       all: function() {
            return "this will do date time info";
          },
        dayAsText: function (index)
          {
              var now = moment();
            dateText = now.add(index, 'days').format("MMMM DD");
            return dateText;
          },
       currentMonth: function (index)
          {
            var now = moment();
            month = now.add(index, 'days').format("MM");
            return month;
          },
         currentDay: function (index)
          {
            var now = moment();
            month = now.add(index, 'days').format("D");
            return month;
          }
  };
});
