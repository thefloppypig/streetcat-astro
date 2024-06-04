
import React from "react";
import { getMeowCameraFileNameData } from "../utils/imageUtils";

interface ImageViewerProps {
    src: string,
}

export default function ImageViewer(props: ImageViewerProps) {
    const { src } = props;

    const filename = src.replace(/^.*[\\/]/, '');
    const data = getMeowCameraFileNameData(filename);

    return (
        <div>
            <img className="imgView" width={1280} height={720} src={src} alt="Streetcat Identifier Image" />
            <h3 className="breakwords">{filename}</h3>
            {data ? <ul>
                <li>Image taken on {data.formattedDate} at {data.formattedTime}</li>
                <li>Image taken at feeder with id {data.feederId}</li>
            </ul> : undefined}
        </div>
    )
}