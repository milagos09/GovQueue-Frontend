import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { faker } from "@faker-js/faker";
import { dirname } from "path";
import { fileURLToPath } from "url";

function generateFakeData() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const agencies = JSON.parse(readFileSync("./fake/agency.json", "utf8"));
    const locations = JSON.parse(readFileSync("./fake/location.json", "utf8"));
    const agencyTypes = JSON.parse(readFileSync("./fake/agencyType.json", "utf8"));
    const folder = `${__dirname}/fake/`;
    const data = {
        admins: [],
        queues: [],
        logs: [],
    };

    // Generate dummy data for admins
    for (let i = 1; i <= 10; i++) {
        const admin = {
            id: i,
            agency: randomElementsPicker(agencies, true),
            type: randomElementsPicker(agencyTypes),
            email: faker.internet.email(),
            password: faker.internet.password(),
            address: faker.location.streetAddress(),
            region: randomElementsPicker(locations),
            chatSupportEnabled: faker.datatype.boolean(),
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU",
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
                updatedOn: faker.date.between({
                    from: "2023-01-01T08:00:00.000Z",
                    to: "2023-01-01T18:00:00.000Z",
                }),
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
            timestamp: faker.date.between({
                from: "2023-01-01T08:00:00.000Z",
                to: "2023-01-01T18:00:00.000Z",
            }),
            queue: Math.floor(Math.random() * 200 + 1),
        };
        data.logs.push(log);
    }
    // Create the "fake" folder if it doesn't exist
    if (!existsSync(folder)) {
        mkdirSync(folder);
        console.log('Folder "fake" created!');
        // Create JSON files for each object
        writeFileSync(`${folder}admins.json`, JSON.stringify(data.admins, null, 2));
        writeFileSync(`${folder}queues.json`, JSON.stringify(data.queues, null, 2));
        writeFileSync(`${folder}logs.json`, JSON.stringify(data.logs, null, 2));
        console.log("Successfully generated fake data");

        return data;
    }
}

function randomElementsPicker(array, isUnique = false) {
    const getRandom = Math.floor(Math.random() * array.length);
    if (isUnique) {
        return array.splice(getRandom, 1)[0];
    }
    return array[getRandom];
}

generateFakeData();
