angular.module('classDataService', [])

/**
 * A simple example service that returns some data.
 */
.factory('classesFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var classes = [
    { id: 0, yogaType: 'Hot Yoga', teacher: 'Paula Pavlova', length: '45 min', location:'Adam\'s Morgan' },
    { id: 1, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', length: '60 min' , location:'Dupont'  },
    { id: 2, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', length: '75 min' , location:'Tenley'  },
     { id: 3, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', length: '90 min' , location:'H Street'  },
    { id: 4, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', length: '75 min' , location:'Shaw'  },
    { id: 5, yogaType: 'Hot Yoga', teacher: 'Paula Pavlova', length: '45 min', location:'Columbia Heights'  },
    { id: 6, yogaType: 'Ashtanga Yoga', teacher: 'Diplo Weasly', length: '60 min' , location:'Rosslyn'  },
    { id: 7, yogaType: 'Power Yoga', teacher: 'Suzzie Suzzington', length: '75 min' , location:'DaSpot'  },
     { id: 8, yogaType: 'Power Yoga', teacher: 'Timmy Timmington', length: '90 min' , location:'DaPlace'  },
    { id: 9, yogaType: 'Kundalini Yoga', teacher: 'Andy Anditon', length: '75 min', location:'DaLocation'   }
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

angular.module('personDataService', [])

/**
 * A simple example service that returns some data.
 */
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
