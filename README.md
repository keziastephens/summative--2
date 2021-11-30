You will write information which is relevant to your project and the different steps that need to be taken for it to work.

Step one: Rename the file mapKeyCopy.js to mapKey.js
Step two: Paste in your API key.




<!-- sort code -->

$('#sortBtn').change(function(){
    $('#cardContent').empty();
    let sortValue = ($('#sortBtn').val()).toLowerCase();
    console.log(sortValue);
    if((sortValue === 'name') || (sortValue === 'price')){
        sortByAscending(sortValue);
    }
});

function sortByAscending(sortOrder){
    
        // console.log(sortOrder);
        // console.log(cardSortGenerator);

        cardSortGenerator.sort(function(a,b){
            $('#acommodationCardContainer').empty();
            let itemA;
            let itemB;
            

                switch(sortOrder){
                    case 'name':
                        // $('#acommodationCardContainer').empty();
                    itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
                        break;
                    // case 'price':
                    //     // $('#acommodationCardContainer').empty();
                    //     console.log('price');
                    //     itemA = a.parseInt(price), itemB = b.parseInt(price);
                    //     break;
                    default:
                        console.log('not matching');
                };
                

                if(itemA < itemB){
                    return -1;
                    // false
                }
                if(itemA > itemB){
                    return 1;
                    // true
                }

        //         sortCards();
        // modal();
       
        });
        sortCards();
        modal();
        console.log(cardSortGenerator);
        // console.log(cardSortGenerator.price);
        // 
};



// $('#refresh').click(function(){
//     console.log('#refresh')
//     $('#cardContent').empty();
//     $('input[type=checkbox]').prop('checked',false);
//     $('input[type=radio]').prop('checked',false);

//     objectArray.sort(function(a,b){
//         let itemA = a.id, itemB = b.id;

//         if(itemA < itemB){
//             return -1;
//             // false
//         }
//         if(itemA > itemB){
//             return 1;
//             // true
//         }
//         console.log(objectArray);

//     });


//     allCards();
//     modal();
// });



function allCards(){
    $('#acommodationCardContainer').empty();
    for(let i =0; i <objectArray.length; i++){
        generateCard(i);
    }
};
function sortCards(){
    // $('#acommodationCardContainer').empty();
    for(let i =0; i < cardSortGenerator.length; i++){
        generateCard(i); 
    }
};