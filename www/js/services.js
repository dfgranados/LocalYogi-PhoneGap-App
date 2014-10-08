angular.module('classDataService', [])

/*RETRIVE CLASS INFORMATION*/
.factory('classesFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var classes = [
    { id: 0, yogaType: 'Hot Yoga', teacher: 'Paula Pavlova', time:'6 pm' , location:'Adam\'s Morgan', year:"2014", month:"10" , day:8, mine:'y' },
    { id: 1, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', time: '8 pm' , location:'Dupont' , year:"2014", month:"10" , day:8, mine:'n'  },
    { id: 2, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', time: '9 pm' , location:'Tenley' , year:"2014", month:"10" , day:8, mine:'n'  },
     { id: 3, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', time: '9 am' , location:'H Street' , year:"2014", month:"12" , day:1, mine:'y'  },
    { id: 4, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', time: '12 pm' , location:'Shaw' , year:"2014", month:"11" , day:1, mine:'n'  },
    { id: 5, yogaType: 'Hot Yoga', teacher: 'Paula Pavlova', time: '3 pm', location:'Columbia Heights' , year:"2014", month:"10" , day:9, mine:'y'  },
    { id: 6, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', time: '8 am' , location:'Rosslyn' , year:"2014", month:"10" , day:10, mine:'n'  },
    { id: 7, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', time: '10am' , location:'DaSpot' , year:"2014", month:"10" , day:10, mine:'n'  },
     { id: 8, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', time: '4:30 pm' , location:'DaPlace' , year:"2014", month:"10" , day:10, mine:'y'  },
    { id: 9, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', time: '5pm', location:'DaLocation', year:"2014", month:"10" , day:10, mine:'y'   }
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
  var classes = [
    { id: 0, firstName:"Paula", lastName:"Pavlova", location: "DC", style: "Vinyasa" },
    { id: 1, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', length: '60 min'  },
    { id: 2, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', length: '75 min'  },
     { id: 3, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', length: '90 min'  },
    { id: 4, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', length: '75 min'  },
    { id: 5, yogaType: 'Hot Yoga', teacher: 'Paula Pavlova', length: '45 min' },
    { id: 6, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', length: '60 min'  },
    { id: 7, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', length: '75 min'  },
     { id: 8, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', length: '90 min'  },
    { id: 9, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', length: '75 min'  }
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
