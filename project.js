const prompt = require("prompt-sync")();
let books = [
    {
        id:1,
        title:"Start with why",
        author:"Simon Sinek",
        price:80.0,
        quantity:13

    },
    {
        id:2,
        title:"But how do it know",
        author:"J. Clark Scott",
        price:59.9,
        quantity:22
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert Cecil Martin",
        price: 50.0,
        quantity: 5
    },
    {
        id: 4,
        title: "Zero to One",
        author: "Peter Thiel",
        price: 45.0,
        quantity: 12
    },
    {
        id: 5,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 39.9,
        quantity: 9
    }


]

let x
while(x!=6){
console.log("Choose a number:\n [1] View All Books \n [2] Search For a Book \n [3] Add a Book \n [4] Buy a Book \n [5] Edit a Book \n [6] Exit \n")
x= parseInt(prompt("Your Choice is: " ))

switch(x){
    case 1:
        console.table(books)
        break;
    case 2:
        
        let Searchbook= prompt("Enter ID, Title, or Author of the book: ").toLowerCase()
        
        function findbook(Searchbook){
            const foundBook = books.filter(bk=>{
                let lowerTitle= bk.title.toLowerCase()
                let lowerAutor = bk.author.toLowerCase()
                
                return (lowerTitle.includes(Searchbook) ||lowerAutor.includes(Searchbook)) || bk.id===(parseInt(Searchbook))
            })
            return foundBook
        }
     
        let foundBook= findbook(Searchbook)

        if(foundBook.length>0){
            console.log("Book is available\n");
            foundBook.forEach(bk => {
                console.table(bk);
            }); 
        }
        else{
            console.log("Book is not available\n")
        }
            
            break;
    case 3:
        let title= prompt("Enter book name: " )
        let author= prompt("Enter author name: " )
        let price= parseFloat(prompt("Enter price: " ))
        let quantity= parseInt(prompt("Enter quantity: " ))
        let id= 1+books[books.length-1].id;

        books.push({id,title,author,price,quantity})
        console.log("\nNew Book Added!!\n")
        break;

    case 4:
        function buyBook(bookId, quantityToBuy) {
            const bookIndex = books.findIndex(book => book.id === bookId);
        
            if (bookIndex !== -1) {
                const book = books[bookIndex];
        
                if (book.quantity >= quantityToBuy) {
                    // Sufficient quantity available, update the quantity
                    book.quantity -= quantityToBuy;
                    console.log(`\nYou Bought "${book.title}" Successfully`) 
                    return true
                } else {
                    
                    console.log("\nPurchase failed due to insufficient quantity") 
                    return false
                }
            } else {
                // Book with the specified ID not found
                console.log("\nBook is not available") 
                return false
            }
        }
        
        const bookIdToBuy = parseInt(prompt("Enter the ID of the book you want to buy: ")); // Replace with the ID of the book you want to buy
        const quantityToBuy = parseInt(prompt("Enter the Quantity of the book you want to buy: "));; // Replace with the quantity you want to buy
        
        if (buyBook(bookIdToBuy, quantityToBuy)) {
            console.log(`Successfully purchased ${quantityToBuy} copies of the book.\n`);
        } else {
            console.log(`Failed to purchase the book. Check availability or book ID.`);
        }

        break;

    case 5:
        let editbook= parseInt(prompt("Enter the book ID: "))
         
        
        function findbk(SearchbookID){
            const foundBook= books.filter(bk =>bk.id ===(parseInt(SearchbookID)))
            const bookIndex = books.findIndex(bk => bk.id === SearchbookID);
            
                
                return  bookIndex
            }
            
        
     
        let bookIndex= findbk(editbook)
        let foundBk=books[bookIndex]
        

        if(bookIndex !== -1){
            console.log("Do you want to edit this book?\n");
            console.table(foundBk);
            let x;
            console.log("[1] Yes\n[2] No\n ")
            x= parseInt(prompt("Your Choice: "))
            if(x===1){
                console.log("Choose what do you want to Edit:\n [1] Title\n [2] Author Name\n [3] Price\n [4] Quantity\n [5] Exit \n")
                let y= parseInt(prompt("Your Choice: "))
                switch(y){
                    case 1:      
                    let newTitle= prompt("Enter the new title: ")      
                        if(newTitle.trim() !== "" ){
                            foundBk.title=newTitle
                            console.log("New title was updated Successfully")

                        }else console.log("Update failed, something went wrong")

                        

                        break;
                    
                    case 2:
                        let newAuthor= prompt("Enter the new author's name: ")    
                        if(newAuthor.trim() !== ""){
                            foundBk.author=newAuthor
                            console.log("New author's name was updated Successfully")

                        }else console.log("Update failed, something went wrong")
                        

                        break;

                    case 3:
                        let newPrice= parseFloat(prompt("Enter the new price: "))    
                        if(!isNaN(newPrice)){
                            foundBk.price=newPrice
                            console.log("New price was updated Successfully")

                        }else console.log("Update failed, something went wrong")

                        break;

                    case 4:
                        let newQuantity= parseInt(prompt("Enter the new quantity: "))  
                        if(!isNaN(newQuantity)){
                            foundBk.quantity=newQuantity
                            console.log("New quantity was updated Successfully")

                        }else console.log("Update failed, something went wrong")

                        break;

                    case 5:
                        break;

                    default:
                        console.log("Please choose a number between [1]-[5]")
            }
        }
            if(x===2){
                break;
            } 
            
        }

        else{
            console.log("Book is not available\n")
        }
        
        break;


    case 6:
        console.log("Thank you!!")
        break;

    default:
        console.log("Please choose a number between [1]-[6]")
}
}