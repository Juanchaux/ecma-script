// enahced object literals

function newUser (user, age, country) {
    return {
        user,
        age,
        country
    }
}

console.log(newUser('david', 38, 'AR'));