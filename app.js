const $header = document.querySelector(".header")

$header.addEventListener("click", function (evt) {
    console.log(evt)
})

const $btn = $('#books');
console.log($btn)

const getBooks = () => {
    console.log('books is live')
}

$btn.on("click", getBooks);

// const $mainBooks = $('books')

// $mainBooks.append('');

//variables
const url = "https://api.itbook.store/1.0/search/";

//elements references
const $content1 = $('.content1');
const $content2 = $('.title');
const $contentLarge = $('.content-large');
const $form = $('form');
const $input = $('input[type="text"]');

//event listeners
$form.on('submit', getBookData)


//create function for the DOM to be manipulated

function getBookData(event) {
    event.preventDefault()
    const userInput = $input.val();
    $.ajax({ 
        method: "GET",
        url: "https://api.itbook.store/1.0/search/" + userInput }).then(function (data) 
           {
        console.log('book is ready')
        console.log(data)
        $content1.text(data.Title)
        $content1.text(data.Price)

    }, function (error) {
        console.log('something is wrong')
        console.log(error)
    });

       

        // Use the for each method to iterate through the array
     
        
        
        




       
 














// console.log(date.image)
        // console.log('book data is ready')
        //   $content1.text(data.title)

        // $('.content1').appendChild(`<img src=" +  ${data.image} Links"/>`);
    // }, function (error) {
    //     console.log('something is wrong')
    //     console.log(error)
    // });

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://ajith-holy-bible.p.rapidapi.com/GetBooks",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
// 		"X-RapidAPI-Key": "4022ecc068mshad1488ce2ed72a7p176c47jsn1bad8f4b70b2"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

}


