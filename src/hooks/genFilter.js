

export function genFilter(gen){
    var gen_range = {}

    if (gen === 1) {
        gen_range = {'min': 1, 'max': 151}
    } else if (gen === 2) {
        gen_range = {'min': 152, 'max': 251}
    } else if (gen === 3){
        gen_range = {'min': 252, 'max': 386}
    } else if (gen === 4) {
        gen_range = {'min': 387, 'max': 493}
    } else if (gen === 5) {
        gen_range = {'min': 494, 'max': 649}
    } else if (gen === 6){
        gen_range = {'min': 650, 'max': 721}
    } else if (gen === 7){
        gen_range = {'min': 722, 'max': 809}
    } else {
        gen_range = {'min': 810, 'max': 898}
    }

    return gen_range
}