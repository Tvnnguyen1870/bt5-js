var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

function testAllValid(users) {
    const isValid = users.every(function(user){
        const isExist = goodUsers.some(function(goodUser){
            return user.id === goodUser.id;
        });
        return isExist;
    });
    return isValid;
}

console.log(testAllValid([{ id: 1 }, { id: 4 }]));
