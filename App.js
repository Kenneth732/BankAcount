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
  
  document.getElementById("withdraw-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    account.withdraw(withdrawAmount); // Use the outer account object to perform withdrawal
    updateBalance(account.balance);
  });
  
  function updateBalance(balance) {
    document.getElementById("balance").textContent = balance.toFixed(2);
  }
  