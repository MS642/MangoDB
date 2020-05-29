let uniqueID = 0;
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const USER = {
  id: 0,
  firstName: 'Max',
  lastName: 'Ahn',
  email: 'ahnmaxwell@gmail.com',
  password: '12345', // remember to encrypt
  tasks: tasks, 
  friends: [], // id of friends in the future, many to many relationship? 
  // bits owned -> can be calculated from tasks?
}

export const TASKS = [
  {
    id: uniqueID++,
    title: "Create dummy data for Task component",
    description: "For 436I",
    givenClaps: [1, 2, 3],  // id of users who has given claps 
    bitTransactions: [
      {
        donorID: 1,
        bitAmount: 10,
        timestamp: new Date()
      },
      {
        donorID: 2,
        bitAmount: 5,
        timestamp: new Date()
      },
      {
        donorID: 3,
        bitAmount: 10,
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
    bitTransactions: [
      {
        donorID: 2,
        bitAmount: 1,
        timestamp: new Date()
      }
    ],
    dueDate: tomorrow, 
    timestamp: today
  }
]