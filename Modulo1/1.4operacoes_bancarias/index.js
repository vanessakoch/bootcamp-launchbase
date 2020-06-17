const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
}

function getHigherTransactionByType(type) {
  let highValue = 0
  let highTransaction = 0;

  for (let transaction of user.transactions) {
    if(transaction.value > highValue && transaction.type === type) {
      highValue = transaction.value 
      highTransaction = transaction
    }
  }

  return highTransaction
}

function getAverageTransactionValue() {
  let sum = 0

  for (let transaction of user.transactions) {
    sum += transaction.value
  }

  return sum/user.transactions.length
}

function getTransactionsCount() {
  let count = { credit: 0, debit: 0 }

  for (transaction of user.transactions) {
    if (transaction.type === 'credit') {
      count.credit += 1
    } else {
      count.debit += 1
    }
  }

  return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType("credit")); 
console.log(getHigherTransactionByType("debit")); 

console.log(getAverageTransactionValue());
console.log(getTransactionsCount());