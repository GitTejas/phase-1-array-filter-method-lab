function findMatching(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, name) {
    return drivers.filter (function(driver) {
     return driver.slice(0,2) === name
    })
}


function matchName(drivers, string) {
    return drivers.filter(function(driver){
        return driver.name === string

    })

}