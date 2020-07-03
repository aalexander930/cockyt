const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
  name: {
    type: String
  },
  spirit: {
    type: String
  },
  glass: {
    type: String
  },
  instructions: {
    type: String
  },
  photo: {
    type: String
  },
  i1: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i2: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i3: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i4: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i5: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i6: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i7: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i8: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i9: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
  i10: {
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  },
});

module.exports = mongoose.model('Drinks', DrinksSchema);