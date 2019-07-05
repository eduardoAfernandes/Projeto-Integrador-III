$(document).on("click", ".btn-dar-lance", function () {
    var auctionID = $(this).data('id');

    var auction = JSON.parse(localStorage.getItem('find-all-auctions')).data.filter((auction) => {
        return auction.auctionID === auctionID;
    })[0]

    console.log(auction);

    $("#modal-bid-title").html( auction.product.title );


});

   
