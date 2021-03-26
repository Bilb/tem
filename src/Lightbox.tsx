
// tslint:disable:react-a11y-anchors

import React, { useEffect, useState } from 'react';


// tslint:disable-next-line: no-submodule-imports
import useKey from 'react-use/lib/useKey';


export const Lightbox = (props: { currentIndex: number }) => {
    return (
        <div>
            {props.currentIndex}
        </div>
    );
};


export type Props = {
    selectedIndex: number;
}

const media = [{}, {}]

export const LightboxGallery = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // just run once, when the component is mounted. It's to show the lightbox on the specified index at start.
    useEffect(() => {
        console.warn('effect', props.selectedIndex)
        setCurrentIndex(props.selectedIndex);
    }, [props.selectedIndex]);


    console.warn('currentIndex', currentIndex);

    const firstIndex = 0;
    const lastIndex = media.length - 1;
    const onPrevious = currentIndex > firstIndex ? () => { setCurrentIndex(currentIndex - 1) } : undefined;
    const onNext = currentIndex < lastIndex ? () => { setCurrentIndex(currentIndex + 1) } : undefined;

    useKey('ArrowRight', () => {
        console.warn('current currentIndex right', currentIndex)

        console.warn('props right', props, currentIndex + 1)

        if (onNext) {
            onNext();
        }
    });
    useKey('ArrowLeft', () => {
        console.warn('current currentIndex left', currentIndex);

        console.warn('props left', props, currentIndex - 1);

        if (onPrevious) {
            onPrevious();
        }
    });

    console.warn('props', props)


    return (
        <Lightbox
            currentIndex={currentIndex}
        />
    );
};
