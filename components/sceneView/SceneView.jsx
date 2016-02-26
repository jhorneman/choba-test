import React, { Component, PropTypes } from 'react';
import SceneText from './SceneText';
import Options from './Options';


function SceneView(props) {
    return (
        <div>
            <SceneText text={props.scene.text} />
            <Options options={props.scene.options} onOptionClicked={props.onOptionClicked} />
        </div>
    );
}

SceneView.propTypes = {
    scene: React.PropTypes.object.isRequired,
    onOptionClicked: React.PropTypes.func.isRequired
}

export default SceneView;