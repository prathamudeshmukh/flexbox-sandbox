var defaultchildrenClass = 'default-children';
var childrenCnt = 1;
var currentParent = null;

initializeBuilder = () => {
    currentParent.click(onChildClick);
    onAddChild();
    onAddChild();
    onAddChild();
}

onChildClick = (event) => {
    currentParent.removeClass('selected-child');
    currentParent = $(event.target);
    currentParent.addClass('selected-child');
}

getDefaultChild = () => {
    var defaultChild = $('<div id="child-'+childrenCnt+'" data-ischild="true">'+childrenCnt+'</div>');
    defaultChild.attr('class', defaultchildrenClass);
    defaultChild.css('backgroundColor', materialColor());
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
    $("#remove-child").click(onRemoveChild);
}

onAddChild = () => {
    var defaultChild = getDefaultChild();
    var isNewlyAddedChild = currentParent.data('ischild');
    if (isNewlyAddedChild && currentParent.children().length === 0) {
        currentParent.text('');
    }
    currentParent.append(defaultChild);
}

onRemoveChild = () => {
    var newParent = currentParent.parent();
    currentParent.remove();
    currentParent = newParent;
}

onFlexDirectionClick = (event) => {
    var flexDirection = event.target.value;
    currentParent.css('flex-direction', flexDirection)
}

onFlexWrapClick = (event) => {
    var flexWrap = event.target.value;
    currentParent.css('flex-wrap', flexWrap)
}

onJustifyContentClick = (event) => {
    var justifyContent = event.target.value;
    currentParent.css('justify-content', justifyContent)
}

onAlignItemsClick = (event) => {
    var alignItems = event.target.value;
    currentParent.css('align-items', alignItems)
}

onAlignContentClick = (event) => {
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

