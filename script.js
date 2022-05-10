
function callGenToolTips() {
    let genTooltip = new genToolTips($('.jsGenTooltip'));
}

class genToolTips {
    constructor(listToolTips) {
        this.listToolTips = listToolTips;
        this.initToolTips();
    }

    initToolTips() {
        for (let tooltip of this.listToolTips) {
            if ($(tooltip).attr('id')) {
                this.createTooltip($(tooltip));
            }
        }
    }

    createTooltip(element) {
        let div = $('<div></div>');
        let div2 = $('<div></div>');
        let idElementValue = $("#" + element.attr('id') + "TooltipText").val();
        const container = element.parent();
        $(container).addClass('tooltipParent');
        let value = '';
        div.addClass('tooltipElementContent');
        div2.addClass('tooltipElement');
        if (idElementValue.match(/html_[^ ]{1,}/)) {
            value = idElementValue.split('_');
            value = value[value.length - 1];
            div2.append($('#' + value).html());
        } else {
            div.addClass('withPointerEvents');
            div2.append(idElementValue);
        }
        div.append(div2);
        container.append(div);
        this.initPosition(element, div, div2);
    }

    initPosition(element, toolContent, toolElement) {
        let positionX = 'center';
        let positionY = 'top';
        let widthElement = $(toolElement).outerWidth() + 30;     
        let heightElement = $(toolElement).outerHeight() + 30;
        let offsetTop = $(toolElement).offset().top;
        let offsetLeft = $(toolElement).offset().left;
        let documentWidth = $(document).outerWidth();
        let documentHeight = $(document).outerHeight();
        if (heightElement > offsetTop) {
            positionY = 'bottom';
        }
        if (heightElement > (documentHeight - (heightElement + offsetTop))) {
            positionY = 'top';
        }
        if (widthElement > offsetLeft) {
            positionX = 'left';
        }
        if (widthElement > (documentWidth - (widthElement + offsetLeft))) {
            positionX = 'right';
        }
        toolContent.addClass(positionX + 'Position');
        toolContent.addClass(positionY + 'Position');
    }


}

callGenToolTips();
