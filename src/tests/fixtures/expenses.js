import moment from "moment";

const getExpenses = () => [
  {
    id: "1",
    description: "Gas",
    note: "Note 1",
    amount: 1000,
    createdAt: moment(0).valueOf()
  },
  {
    id: "2",
    description: "Electricity",
    note: "Note 2",
    amount: 2500,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Water",
    note: "Note 3",
    amount: 900,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default getExpenses;
