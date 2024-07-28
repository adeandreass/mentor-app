import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    teacherProfileImage: f({ image: { maxFileSize: "1MB" } })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "LearnMate" };
        }),

    teacherProfessionDocs: f({ pdf: { maxFileSize: "4MB", maxFileCount: 4 } })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "LearnMate" };
        }),

        additionalDocs: f({ pdf: { maxFileSize: "4MB", maxFileCount: 4 } })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "LearnMate" };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;