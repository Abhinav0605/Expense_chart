<<<<<<< HEAD
const balance1=document.getElementById("balance");
const totalIncome1=document.getElementById("totalIncome");
const totalExpense1=document.getElementById("totalExpense");
const description1=document.getElementById("description");
const amount1=document.getElementById("amount");
const addTransactionBtn1=document.getElementById("addTransaction");
const transactionList1=document.getElementById("transactionList");
// console.log(transactionList1);

let transactions=JSON.parse(localStorage.getItem("transactions")) ||[];

function updateUI(){
    transactionList1.innerHTML="";
    let balance=0;
    let totalIncome=0;
    let totalExpense=0;

    transactions.forEach((transaction,index) =>{
        let listItem=document.createElement("li");
        listItem.classList.add(transaction.amount>0?"income":"expense");
        listItem.innerHTML=`${transaction.description} Rs${transaction.amount}
            <button class="delete-btn"  
             onclick="deleteTransaction(${index})">X</button>`;

        transactionList1.appendChild(listItem);

        balance+=transaction.amount;
        if(transaction.amount>0){
           totalIncome+=transaction.amount;
        }else{
            totalExpense+=Math.abs(transaction.amount);
        }

    });


    balance1.innerText=balance;
    totalIncome1.innerText=totalIncome;
    totalExpense1.innerText=totalExpense;

    localStorage.setItem("transactions",JSON.stringify(transactions));
}


addTransactionBtn1.addEventListener("click",() =>{

    let description=description1.value.trim();
    let amount=parseFloat(amount1.value.trim());

    if(description==="" || isNaN(amount)){
        alert("please enter Valid details");
        return;
    }

    transactions.push({description,amount});
    description1.value="";
    amount1.value="";
    updateUI();

});


function deleteTransaction(index){
    transactions.splice(index,1);
    updateUI();
}

=======
const balance1=document.getElementById("balance");
const totalIncome1=document.getElementById("totalIncome");
const totalExpense1=document.getElementById("totalExpense");
const description1=document.getElementById("description");
const amount1=document.getElementById("amount");
const addTransactionBtn1=document.getElementById("addTransaction");
const transactionList1=document.getElementById("transactionList");
// console.log(transactionList1);

let transactions=JSON.parse(localStorage.getItem("transactions")) ||[];

function updateUI(){
    transactionList1.innerHTML="";
    let balance=0;
    let totalIncome=0;
    let totalExpense=0;

    transactions.forEach((transaction,index) =>{
        let listItem=document.createElement("li");
        listItem.classList.add(transaction.amount>0?"income":"expense");
        listItem.innerHTML=`${transaction.description} Rs${transaction.amount}
            <button class="delete-btn"  
             onclick="deleteTransaction(${index})">X</button>`;

        transactionList1.appendChild(listItem);

        balance+=transaction.amount;
        if(transaction.amount>0){
           totalIncome+=transaction.amount;
        }else{
            totalExpense+=Math.abs(transaction.amount);
        }

    });


    balance1.innerText=balance;
    totalIncome1.innerText=totalIncome;
    totalExpense1.innerText=totalExpense;

    localStorage.setItem("transactions",JSON.stringify(transactions));
}


addTransactionBtn1.addEventListener("click",() =>{

    let description=description1.value.trim();
    let amount=parseFloat(amount1.value.trim());

    if(description==="" || isNaN(amount)){
        alert("please enter Valid details");
        return;
    }

    transactions.push({description,amount});
    description1.value="";
    amount1.value="";
    updateUI();

});


function deleteTransaction(index){
    transactions.splice(index,1);
    updateUI();
}

>>>>>>> 9eb629be8a569a704397f475ab5f5660347ecb96
updateUI();