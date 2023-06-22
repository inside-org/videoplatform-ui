import { createServer, Model } from 'miragejs';

export function makeServer({ environment = "test" }) {
    createServer({
        environment,
        models: {
            video: Model,
        },
        // seeds(server) {
        //     server.create('video', { text: 'video title 1' })
        //     server.create('video', { text: 'video title 2' })
        //     server.create('video', { text: 'video title 3' })
        // },
        // routes() {
        //     this.get("/api/videos", (schema) => {
        //         return schema.videos.all()
        //     })
        // },
    });
}