import React from 'react';
import { render } from 'react-dom';
import { buildContext,
         restartGame,
         getRandomInt,
         expressionEvaluators,
         actionHandlers,
         nullValue,
         getRandomlySelectedItemIndexByTags } from 'choba-engine';
import SceneView from './components/sceneView/SceneView';


let sceneDescriptions = {
    start: {
        content: ["seq",
            ["text", `You are in a mysterious forest.`],
            ["addOption", ["text", "Go north."], "goto", "computer_room"]
        ]
    },
};

let context = buildContext({
    initialVars: {},
    scenes: sceneDescriptions
});

let { newScene, dynamicState } = restartGame(context);

function onOptionClicked(_index) {
    console.log('Clicked on option ' + _index);
}

let container = document.getElementById('root');
render(
    <SceneView scene={newScene} onOptionClicked={onOptionClicked}/>,
    container
);
