let uniqueID = 0;
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const TASKS = [
  {
    id: uniqueID++,
    title: "Create dummy data for Task component",
    description: "For 436I",
    givenClaps: [1, 2, 3],  // id of users who has given claps 
    mangoTransactions: [
      {
        donorID: 1,
        mangoAmount: 10,
        timestamp: new Date()
      },
      {
        donorID: 2,
        mangoAmount: 5,
        timestamp: new Date()
      },
      {
        donorID: 3,
        mangoAmount: 10,
        timestamp: new Date()
      }
    ],
    dueDate: null,
    timestamp: new Date()
  },
  {
    id: uniqueID++,
    title: "Create task component",
    description: "For 436I",
    givenClaps: [3],  // id of users who has given claps 
    mangoTransactions: [
      {
        donorID: 2,
        mangoAmount: 1,
        timestamp: new Date()
      }
    ],
    dueDate: tomorrow, 
    timestamp: today
  }
];

export const USER = {
  id: 0,
  firstName: 'Max',
  lastName: 'Ahn',
  email: 'ahnmaxwell@gmail.com',
  password: '12345', // remember to encrypt
  tasks: TASKS, 
  friends: [], // id of friends in the future, many to many relationship? 
  // bits owned -> can be calculated from tasks?
}
