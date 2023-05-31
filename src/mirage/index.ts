import { createServer } from 'miragejs';

export function makeServer({ environment = "test" }) {
    createServer({
        environment,
        routes() {
            this.get("/api/videos", () => ({
                videos: [],
            }))
          },
    });
}