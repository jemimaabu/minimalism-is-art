import * as React from 'react';
import './grid-display.css';

export interface SampleProps {
    name: string;
}

export interface SampleState {
    name: string;
}

export class Sample extends React.Component<SampleProps, SampleState> {
    render() {
        return (
            <div className="grid-display-container">
            </div>
        )
    }
}