var defaultBuilderClasses = [''];
initializeBuilder = () => {
    var builder = $('#builder');
    builder.append()
}

initializeControls = () => {
    $("input[name='flex-direction']").click(onFlexDirectionClick);
    $("input[name='flex-wrap']").click(onFlexWrapClick);
    $("input[name='justify-content']").click(onJustifyContentClick);
    $("input[name='align-items']").click(onAlignItemsClick);
    $("input[name='align-content']").click(onAlignContentClick);
}

onFlexDirectionClick = (event) => {
    console.log('Flex Direction',event.target.value);
}

onFlexWrapClick = (event) => {
    console.log('Flex Wrap',event.target.value);
}

onJustifyContentClick = (event) => {
    console.log('Justify Content',event.target.value);
}

onAlignItemsClick = (event) => {
    console.log('Align Items',event.target.value);
}

onAlignContentClick = (event) => {
    console.log('Align Content',event.target.value);
}

$(document).ready(() => {
    initializeControls();
});