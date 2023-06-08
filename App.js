function BankAccount(initialDeposit) {
    this.balance = initialDeposit;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  };
