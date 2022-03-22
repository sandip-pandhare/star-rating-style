document.querySelectorAll('[data-star-rating]')
.forEach(function(el){
    let dataAttribute = el.getAttribute('data-star-rating').split('/');
    let ratingNumber = parseFloat(dataAttribute[0]);
    let ratingOutOf = parseFloat(dataAttribute[1]);

    // add new star elements to attribute
    for( let n=1; n<=5; n++ ){
        let newChild = document.createElement("div");
        el.appendChild(newChild);
    }

    if( ( ratingNumber > 0 ) && ( ratingOutOf > 0 ) ){
        let percentage = ratingNumber / ratingOutOf * 100;
        for ( let p=1; p<=5; p++ ){
            let starNode = el.children.item(p-1);
            let newDiv = document.createElement("div");
            starNode.appendChild(newDiv);
            let newVal = percentage - ( (p - 1) * 20 );
            newVal < 20 ? styleWidth = newVal * 5 : styleWidth = 100;
            newDiv.style.width = styleWidth+'%';
            
            if( ( percentage - (p * 20) ) <= 0 ){
                break;
            }
        }
    }
});