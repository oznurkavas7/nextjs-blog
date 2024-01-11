import { Metadata } from "next";

const title = 'Öznur Boztepe'
const description = "Personel Portfolio"

export const sharedMetadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: "website",
        locale: "en_US",
        url: "https://github.com/oznurkavas7"
    },
    twitter: {
        title,
        description,
        creator: "@oznurkavass",
        site: "@oznurkavass",
        card: "summary_large_image"
    }
}