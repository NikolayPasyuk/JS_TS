import {createGreetingMessage, ManyType} from "./05_01";

let people: Array<ManyType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test("should get array of greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-Incubator")
    expect(messages[1]).toBe("Hello Alexandr. Welcom to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcom to IT-Incubator")

})