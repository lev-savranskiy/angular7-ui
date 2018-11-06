export let user = {
  name: 'Lev Savranskiy',
  loggedAt: '11:25 AM EST'
};

export let patient = {
  name: 'Taylor Swift',
  id: 424242422,
  dob: '12/13/89',
  age: 27,
  sex: 'F'
};


export let grid1 = {
  dataSource: [
    {id: 1, Section: 'Medication', Item: 'Xanax', Status: 'Incomplete' , link: 'https://www.google.com/search?q=Xanax'},
    {id: 2, Section: 'Medication', Item: 'Adderall', Status: 'Complete' , link: 'https://www.google.com/search?q=Adderall'},
    {id: 3, Section: 'Order', Item: 'Metabolic Panel', Status: 'Unsigned', link: 'https://www.google.com/search?q=Metabolic Panel'}
  ]
};

export let grid2 = {
  dataSource: [
    {id: 1, Problem: '(F43.23)Anxiety', Date: '11/04/18', Notes: 'Tremor', Doctor: 'Dr. Sean Robert',
      Education: 'https://www.nyu.edu/', status: 1},
    {id: 2, Problem: '(I15.8)Hypertension', Date: '11/06/18', Notes: 'Fatigue', Doctor: 'Dr. Sean Robert',
      Education: null, status: 0},
  ]
};

export let grid3 = {
  dataSource: [
    {id: 1, Visit: 'Annual', Date: '11/04/18', Time: '11:05AM', Employee: 'Monica Hall', status: 1},
    {id: 2,  Visit: 'EKG', Date: '11/04/18', Time: '11:09AM', Employee: 'Monica Hall', status: 1},
    {id: 3, Visit: 'Sutures', Date: '11/05/18', Time: '3:45PM', Employee: 'Tracy Scott', status: 1},
    {id: 4,  Visit: 'Renal', Date: '11/06/18', Time: '08:47AM', Employee: 'Tracy Scott', status: 0},
  ]
};

export let grid4 = {
  dataSource: [
    {id: 1, Medication: 'Lovastain', Schedule: '1 tab before breakfast', Refills: 3,
      Pharmacy: 'CVS', Status: 'Complete', Education: 'https://www.nyu.edu/' },
    {id: 2, Medication: 'Xanax', Schedule: '1 tab before bedtime', Refills: 2,
      Pharmacy: 'CVS', Status: 'Incomplete', Education: 'https://www.nyu.edu/', status: 1 },
    {id: 3, Medication: 'Adderall', Schedule: '1 tab before bedtime', Refills: 2,
      Pharmacy: 'CVS', Status: 'Incomplete', Education: 'https://www.nyu.edu/' },
  ]
};

export let grid5 = {
  dataSource: [
    {id: 1, Order: 'Metabolic', Category: 'Labs', Time: '11:15AM', status: 1,
      Doctor: 'Dr. Lev Savranskiy', Status: 'Complete'},
    {id: 2, Order: 'MRI', Category: 'Radiology', Time: '2:42PM',
      Doctor: 'Dr. Lev Savranskiy', Status: 'Incomplete'}
  ]
};

export let grid6 = {
  dataSource: [
    {id: 1, Order: 123456, OrderDate: '11/04/18', ReceivedDate: '11/06/18', status: 1,
      Source: 'Electronic', Status: 'Unsigned'},
    {id: 4, Order: 234567, OrderDate: '11/02/18', ReceivedDate: '11/03/18', status: 0,
      Source: 'Manual', Status: 'Signed'},

  ]
};

export let grid7 = {
  dataSource: [
    {id: 1, Visit: 'Influenza',  Date: '11/06/18', Time: '11:15AM', status: 1},
    {id: 2, Visit: 'Pneumonia',  Date: '11/07/18', Time: '12:09PM', status: 0}

  ]
};



export let instructions = ['Diet', 'MRI', 'Skin tag removal'];
