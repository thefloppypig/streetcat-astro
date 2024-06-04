import React, { ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getCatUrl } from "../utils/readFiles";
import { CatImage } from "./CatImage";
import { CatData } from "../Types";

interface CatPageProps {
    filesLocal: string[]
    filesExt: string[]
    catData: CatData
}

export default function CatPage(props: CatPageProps) {
    const { catData, filesLocal, filesExt } = props;

    return (
        null
    )
}

export function getGalleryElements(files: string[], catData: CatData) {
    const elems: ReactNode[] = [];

    for (let index = files.length - 1; index >= 0; index--) {
        const file = files[index];
        if (file.endsWith(".webp")) elems.push(<CatImage className="galleryImg" key={file} src={getCatUrl(catData, file)} alt={`Picture of ${catData.name}`} />)
    }

    return elems;
}

export function getExtGalleryElements(urls: string[] | undefined, catData: CatData) {
    if (!urls) return <div>Loading...</div>
    else if (urls.length > 0) {
        const elems: ReactNode[] = [];
        urls.forEach((src, i) => {
            if (src.includes("youtube")) {
                elems.push(<iframe key={i} className="galleryIframe" width="100%" height="100%" src={src}></iframe>)
            }
            else {
                elems.push(<CatImage key={i} src={src} alt={`Picture of ${catData.name}`} className="galleryImg" />)
            }
        })
        return elems;
    }
    else return undefined;
}
