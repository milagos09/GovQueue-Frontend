import { existsSync, mkdirSync, writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

function generateFakeData() {
    const folder = "fake/";
    const data = {
        admins: [],
        queues: [],
        logs: [],
    };

    // Generate dummy data for admins
    for (let i = 1; i <= 10; i++) {
        const admin = {
            id: i,
            agency: faker.company.name(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            address: faker.location.streetAddress(),
            region: faker.location.city(),
            regionCode: faker.location.countryCode(),
            chatSupportEnabled: faker.datatype.boolean(),
            logo: faker.image.urlLoremFlickr({ category: "business" }),
        };
        data.admins.push(admin);
    }

    // Generate dummy data for queues
    for (let i = 0; i < 2; i++) {
        for (let j = 1; j <= 10; j++) {
            const queue = {
                id: j + i * 10,
                adminId: j,
                name: `Window ${i + 1}`,
                current: Math.floor(Math.random() * 100 + 1),
                updatedOn: faker.date.between({ from: "2023-01-01T08:00:00.000Z", to: "2023-01-01T18:00:00.000Z" }),
            };
            data.queues.push(queue);
        }
    }

    // Generate dummy data for logs
    for (let i = 1; i <= 100; i++) {
        const adminId = Math.floor(Math.random() * 10 + 1);
        const adminIdQueues = data.queues.filter((e) => e.adminId === adminId);
        const log = {
            id: i,
            queueId: adminIdQueues[Math.floor(Math.random() * adminIdQueues.length)].id,
            adminId: adminId,
            action: "increment",
            timestamp: faker.date.between({ from: "2023-01-01T08:00:00.000Z", to: "2023-01-01T18:00:00.000Z" }),
            queue: Math.floor(Math.random() * 200 + 1),
        };
        data.logs.push(log);
    }
    // Create the "fake" folder if it doesn't exist
    if (!existsSync(folder)) {
        mkdirSync(folder);
        console.log('Folder "fake" created!');
    }

    // Create JSON files for each object
    writeFileSync(`${folder}admins.json`, JSON.stringify(data.admins, null, 2));
    writeFileSync(`${folder}queues.json`, JSON.stringify(data.queues, null, 2));
    writeFileSync(`${folder}logs.json`, JSON.stringify(data.logs, null, 2));
    console.log("Successfully generated fake data");

    return data;
}

generateFakeData();
