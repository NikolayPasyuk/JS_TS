function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    let user: UserType = {
        name: "Nick",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [{
        name: "Nick",
        age: 32
    },
        {
            name: "Nick",
            age: 32
        },
    ]

    let admins = users

    admins.push({name: 'Valera', age: 15})

    expect(users[2]).toEqual({name: 'Valera', age: 15})

})

test('array reference test', () => {
    let users = [{
        name: "Nick",
        age: 32
    },
        {
            name: "Nick",
            age: 32
        },
    ]

    const admins = users

    admins.push({name: 'Valera', age: 15})

    expect(users[2]).toEqual({name: 'Valera', age: 15})
})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = adminsCount + 1
    adminsCount++

    expect(users[2]).toEqual({name: 'Valera', age: 15})

})

test('reference test', () => {

    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Nick",
        age: 32,
        address: address
    }


    let user2: UserType = {
        name: "Masha",
        age: 35,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {

    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Nick",
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: "Masha",
        age: 35,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Gena'

    expect(users[0].name).toBe('Gena')
    expect(user.name).toBe('Gena')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}