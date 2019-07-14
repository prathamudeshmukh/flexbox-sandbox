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
    var computedStyle = getComputedStyle(currentParent.attr('style'));
    currentParent = $(event.target);
    currentParent.addClass('selected-child');
    initializeControlsSelections(computedStyle);
}

initializeControlsSelections = (style) => {
    
    var flexDirection = style['flex-direction'] ? style['flex-direction'] : 'row';
    var flexWrap = style['flex-wrap'] ? style['flex-wrap'] : 'nowrap';
    var justifyContent = style['justify-content'] ? style['justify-content'] : 'flex-start';
    var alignItems = style['align-items'] ? style['align-items'] : 'stretch';
    var alignContents = style['align-content'] ? style['align-content'] : 'stretch';

    $("input[name='flex-direction'][value='"+flexDirection+"']").prop('checked',true);
    $("input[name='flex-wrap'][value='"+flexWrap+"']").prop('checked',true);
    $("input[name='justify-content'][value='"+justifyContent+"']").prop('checked',true);
    $("input[name='align-items'][value='"+alignItems+"']").prop('checked',true);
    $("input[name='align-content'][value='"+alignContents+"']").prop('checked',true);
}

getComputedStyle = (style) => {
    if (!style) {
        return {};
    }
    var styles = style.split(';')
    if (!styles[styles.length - 1]){
        styles = styles.slice(0,styles.length - 1);
    }
    var computedStyle = {};
    for (var index in styles) {
        var styleProp = styles[index].split(':');
        computedStyle[styleProp[0].trim()] =  styleProp[1].trim()
    }
    return computedStyle;
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

resetSelection = () => {
    currentParent.removeClass('selected-child');
    currentParent = $("iframe#builder").contents().find('#container');
}

$(document).ready(() => {
    initializeControls();
    $('#builder').on("load", function() {
        currentParent = $("iframe#builder").contents().find('#container');
        initializeBuilder();
    });
    var body = $('body');
    body.click(resetSelection);
});

