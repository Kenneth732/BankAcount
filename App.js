function BankAccount(initialDeposit) {
    this.balance = initialDeposit;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  };
  
  var account; // Declare the account object outside the event listeners
  
  document.getElementById("account-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const initialDeposit = parseFloat(document.getElementById("initial-deposit").value);
    account = new BankAccount(initialDeposit); // Assign the created account to the outer variable
    updateBalance(account.balance);
  });
  
  document.getElementById("deposit-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    account.deposit(depositAmount); // Use the outer account object to perform deposit
    updateBalance(account.balance);
  });
  

  