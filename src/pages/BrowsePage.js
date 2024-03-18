import React from 'react';
import  BrowseContainer  from '../container/browse';
import { useContent } from '../hooks';
import  selectionFilter  from '../utils/selection-filter';


export default function BrowsePage() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ series, films});

    return (
        <BrowseContainer slides={slides} />
    );
}


