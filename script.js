function BankAccount(initialDeposit) {
  this.balance = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  } else {
    console.log("Insufficient funds");
  }
};

BankAccount.prototype.getBalance = function() {
  return this.balance;
};

// User interface logic
window.addEventListener("load", function() {
  const accountForm = document.querySelector("#account-form");
  const depositForm = document.querySelector("#deposit-form");
  const withdrawForm = document.querySelector("#withdraw-form");
  const balanceDisplay = document.querySelector("#balance");

  let bankAccount;

  accountForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const initialDeposit = parseFloat(document.querySelector("#initial-deposit").value);
    bankAccount = new BankAccount(initialDeposit);
    balanceDisplay.textContent = bankAccount.getBalance();
    accountForm.reset();
  });

  depositForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const depositAmount = parseFloat(document.querySelector("#deposit-amount").value);
    bankAccount.deposit(depositAmount);
    balanceDisplay.textContent = bankAccount.getBalance();
    depositForm.reset();
  });

  withdrawForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const withdrawAmount = parseFloat(document.querySelector("#withdraw-amount").value);
    bankAccount.withdraw(withdrawAmount);
    balanceDisplay.textContent = bankAccount.getBalance();
    withdrawForm.reset();
  });
});

// <|endoftext|>