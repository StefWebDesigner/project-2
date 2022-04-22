export function checkWin(correct, wrong, word) {
    let status = 'win';

    //check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    });

    //check for lose
    if(wrong.length === 9) status = 'lose';

    return status;
}