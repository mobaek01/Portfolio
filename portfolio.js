$(() => {
    let currentCardIndex = 0
    let numOfCard = $('.projects').children().length - 1
    console.log(numOfCard);

    $('.next').on('click', () => {
        $('.projects').children().eq(currentCardIndex).css('display', 'none')
        if (currentCardIndex < numOfCard){
            currentCardIndex++
        }else {
            currentCardIndex = 0
        }
        $('.projects').children().eq(currentCardIndex).css('display', 'block')
    })

    $('.previous').on('click', () => {
        $('.projects').children().eq(currentCardIndex).css('display', 'none')
        if (currentCardIndex > 0){
            currentCardIndex--
        } else {
            currentCardIndex = numOfCard
        }
        $('.projects').children().eq(currentCardIndex).css('display', 'block')
    })
});
