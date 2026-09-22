// Источник данных мира

const WORLD = {

    // Пояса мира

    belts: [

        {
            id: 0,
            name: "Пустошь",
            unlockBook: 1
        },


        {
            id: 1,
            name: "Первый пояс",
            unlockBook: 2
        },


        {
            id: 2,
            name: "Второй пояс",
            unlockBook: 6
        },


        {
            id: 3,
            name: "Третий пояс",
            unlockBook: 11
        },


        {
            id: 4,
            name: "Четвёртый пояс",
            unlockBook: 15
        },


        {
            id: 5,
            name: "Пятый пояс",
            unlockBook: 18
        },


        {
            id: 6,
            name: "Земли Итреи",
            unlockBook: 21
        }

    ],


    // Локации

    locations: [


        {
            id: "wasteland",

            name: "Пустошь",

            belt: 0,

            unlockBook: 1,

            description:
                "Земли нулевого круга."
        },


        {
            id: "school",

            name: "Школа",

            belt: 1,

            unlockBook: 2,

            description:
                "Место обучения и первых испытаний."
        },


        {
            id: "frost_ridge",

            name: "Морозная гряда",

            belt: 1,

            unlockBook: 3,

            description:
                "Суровые земли Первого пояса."
        },


        {
            id: "ancient_city",

            name: "Город Древних",

            belt: 1,

            unlockBook: 5,

            description:
                "Один из важнейших объектов Первого пояса."
        },


        {
            id: "ash_city",

            name: "Город Ясеня",

            belt: 2,

            unlockBook: 6,

            description:
                "Город Второго пояса."
        },


        {
            id: "small_sky_order",

            name:
                "Малый Орден Небесного меча",

            belt: 2,

            unlockBook: 8,

            description:
                "Орден воинов Второго пояса."
        },


        {
            id: "big_sky_order",

            name:
                "Большой Орден Небесного меча",

            belt: 5,

            unlockBook: 18,

            description:
                "Великий орден поздних поясов."
        },


        {
            id: "itrea",

            name:
                "Земли Итреи",

            belt: 6,

            unlockBook: 21,

            description:
                "Последний известный пояс."
        }

    ]

};

function getBeltByBook(bookNumber) {


    let result = WORLD.belts[0];


    WORLD.belts.forEach(belt => {


        if (bookNumber >= belt.unlockBook) {

            result = belt;

        }


    });


    return result;

}

function isLocationUnlocked(locationId, progress) {


    const location = WORLD.locations.find(

        item => item.id === locationId

    );


    if (!location) {

        return false;

    }


    return progress >= location.unlockBook;


}

function getUnlockedLocations(progress) {


    return WORLD.locations.filter(

        location =>
            progress >= location.unlockBook

    );


}

function getUnlockedBelts(progress) {


    return WORLD.belts.filter(

        belt =>
            progress >= belt.unlockBook

    );


}