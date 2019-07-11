var defaultchildrenClass = 'default-children';
var baseUrl = 'http://192.168.0.4:8989/';
var childrenCnt = 1;
var currentParent = null;

initializeBuilder = () => {
    currentParent.click(onChildClick);
    onAddChild();
    onAddChild();
    onAddChild();
}

onChildClick = (event) => {
    console.log('onchildclick',event.target.id);
    currentParent.removeClass('selected-child');
    currentParent = $(event.target);
    currentParent.addClass('selected-child');
}

getDefaultChild = () => {
    var defaultChild = $('<div id="child-'+childrenCnt+'" data-ischild="true">'+childrenCnt+'</div>');
    defaultChild.attr('class', defaultchildrenClass);
    defaultChild.click(onChildClick);
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
    var isNewlyAddedChild = currentParent.data('ischild');
    if (isNewlyAddedChild && currentParent.children().length === 0) {
        console.log('childrenSize:',currentParent.children().length);
        // console.log('childrenText:',currentParent.text());
        // console.log('childrenHTML:',currentParent.html());
        currentParent.text('');
    }
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

