const reglasSintacticas = {
    "UPDATE" : [[772, 99, 662, 99, 10, 99, 800, 99, 14, 98, 6], [772, 99, 662, 99, 10, 11, 655, 127, 11, 99, 12, 309, 99, 800, 99, 10, 99, 12, 800, 99, 10, 99, 6],],
    "SELECT" : [655, 7, 309, 99, 800, 99, 349, 11, 655, 99, 309, 99, 800, 99, 10, 99, 12, 6],
    "INSERT INTO" : [[360, 365, 99, 11, 99, 3, 99, 3, 99, 3, 99, 12, 655, 99, 3, 99, 3, 99, 3, 99, 309, 99, 357, 385, 99, 518, 99, 10, 99, 800, 99, 406, 99, 6], [360, 365, 99, 11, 99, 3, 99, 3, 99, 12, 655, 99, 3, 99, 3, 99, 309, 99, 528, 145, 99, 231, 407, 98, 6], [360, 309, 99, 11, 99, 3, 99, 3, 99, 12, 785, 11, 99, 3, 99, 3, 98, 12, 6],[360, 309, 99, 11, 99, 3, 99, 3, 99, 3, 99, 12, 655, 99, 3, 99, 3, 99, 3, 99, 309, 99, 6],], 
    "CREATE" : [[197, 728, 99, 11, 99, 364, 562, 389, 3, 99, 787, 11, 98, 12, 502, 508, 3, 99, 787, 11, 98, 12, 502, 508, 12, 6], [197, 728, 99, 11, 99, 364, 562, 389, 3, 99, 364, 502, 508, 3, 99, 364, 502, 508, 3, 99, 364, 502, 508, 3, 99, 364, 502, 508, 12, 6],],
    "DELETE" : [[229, 309, 99, 800, 99, 10, 99, 6],[229, 309, 99, 800, 99, 10, 98, 6]],
}

module.exports = {
    reglasSintacticas,
}