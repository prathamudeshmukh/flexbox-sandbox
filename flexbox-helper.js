var defaultchildrenClass = 'default-children';
var baseUrl = 'http://192.168.0.4:8989/';
var childrenCnt = 1;
var currentParent = null;

initializeBuilder = () => {
    onAddChild();
    onAddChild();
    onAddChild();
}

getDefaultChild = () => {
    var defaultChild = $('<div id="child-'+childrenCnt+'">'+childrenCnt+'</div>');
    defaultChild.attr('class', defaultchildrenClass);
    childrenCnt ++;
    return defaultChild;
}

initializeControls = () => {
    $("input[name='flex-direction']").click(onFlexDirectionClick);
    $("input[name='flex-wrap']").click(onFlexWrapClick);
    $("input[name='justify-content']").click(onJustifyContentClick);
    $("input[name='align-items']").click(onAlignItemsClick);
    $("input[name='align-content']").click(onAlignContentClick);
    $("#add-child").click(onAddChild);
}

onAddChild = () => {
    console.log('onaddchild');
    var defaultChild = getDefaultChild();
    currentParent.append(defaultChild);
}

onFlexDirectionClick = (event) => {
    console.log('Flex Direction',event.target.value);
    var flexDirection = event.target.value;
    currentParent.css('flex-direction', flexDirection)
}

onFlexWrapClick = (event) => {
    console.log('Flex Wrap',event.target.value);
    var flexWrap = event.target.value;
    currentParent.css('flex-wrap', flexWrap)
}

onJustifyContentClick = (event) => {
    console.log('Justify Content',event.target.value);
    var justifyContent = event.target.value;
    currentParent.css('justify-content', justifyContent)
}

onAlignItemsClick = (event) => {
    console.log('Align Items',event.target.value);
    var alignItems = event.target.value;
    currentParent.css('align-items', alignItems)
}

onAlignContentClick = (event) => {
    console.log('Align Content',event.target.value);
    var alignContent = event.target.value;
    currentParent.css('align-content', alignContent)
}

$(document).ready(() => {
    initializeControls();
    $('#builder').on("load", function() {
        currentParent = $("iframe#builder").contents().find('#container');
        initializeBuilder();
    });
});

