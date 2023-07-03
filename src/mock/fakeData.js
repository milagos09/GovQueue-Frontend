// Admins Table
export const admins = [
    {
        id: 1,
        email: "birr6@bir.gov.ph",
        password: "123456",
        address: "Molo, Iloilo City",
        agency: "Bureau of Internal Revenue Region VI",
    },
    {
        id: 2,
        email: "sss6@sss.gov.ph",
        password: "123456",
        address: "City Proper, Iloilo City",
        agency: "Social Security System Region VI",
    },
];

// Queues Table
export const queues = [
    {
        qId: 1,
        adminId: 1,
        name: "Window 1",
        updatedOn: 1650749590,
        currentQueue: 1,
    },
    {
        qId: 2,
        adminId: 1,
        name: "Window 2",
        updatedOn: 1650749690,
        currentQueue: 5,
    },
    {
        qId: 3,
        adminId: 2,
        name: "Cashier",
        updatedOn: 1650749333,
        currentQueue: 10,
    },
];

// Queue Logs Table
export const queueLogs = [
    {
        queueId: 1,
        action: "increment",
        timestamp: 1650749590,
        queue: 1,
    },
    {
        queueId: 1,
        action: "increment",
        timestamp: 1650749610,
        queue: 2,
    },
    {
        queueId: 1,
        action: "increment",
        timestamp: 1650749650,
        queue: 3,
    },
    {
        queueId: 1,
        action: "reset",
        timestamp: 1650749670,
        queue: 0,
    },
    {
        queueId: 1,
        action: "increment",
        timestamp: 1650749680,
        queue: 1,
    },
    {
        queueId: 2,
        action: "increment",
        timestamp: 1650749690,
        queue: 5,
    },
    {
        queueId: 2,
        action: "increment",
        timestamp: 1650749700,
        queue: 6,
    },
    {
        queueId: 2,
        action: "increment",
        timestamp: 1650749720,
        queue: 7,
    },
    {
        queueId: 2,
        action: "reset",
        timestamp: 1650749740,
        queue: 0,
    },
];
