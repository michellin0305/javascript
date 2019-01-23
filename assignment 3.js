const students = [
    {
        first_name: "frankie",
        last_name: "obama",
        grade: 76,
        age: 14,
    },

    {
        first_name: "steve",
        last_name: "clark",
        grade: 50,
        age: 16,
    },

    {
        first_name: "monica",
        last_name: "williams",
        grade: 60,
        age: 17,
    },

    {
        first_name: "joe",
        last_name: "benard",
        grade: 87,
        age: 18,
    },

    {
        first_name: "tyler",
        last_name: "kerry",
        grade: 60,
        age: 21,
    },

    {
        first_name: "morgan",
        last_name: "mcguire",
        grade: 57,
        age: 20,
    },

    {
        first_name: "carson",
        last_name: "steel",
        grade: 70,
        age: 20,
    },

    {
        first_name: "riley",
        last_name: "fisher",
        grade: 45,
        age: 20,
    },

    {
        first_name: "hailey",
        last_name: "stones",
        grade: 89,
        age: 20,
    },

    {
        first_name: "benny",
        last_name: "stones",
        grade: 90,
        age: 20,
    },
];

const tooOld = students.filter(function (ages) {
    return ages.age >= 16;
});

console.log(tooOld)