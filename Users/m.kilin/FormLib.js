class Form {
    constructor(formName, scriptName) {
        this.formName = formName;
        this.scriptName = scriptName;
        $('#' + formName).append("<form action='" + scriptName + "' method='POST'>");
        this.$element = $('#' + formName + " form");

    }
    add(element) {
        element.place(this);
    }
}
class Element {
    constructor() {
        this.owner;
        this.$tag;
    }
    place(owner) {
        this.$tag.appendTo(owner.$element);
        this.owner = owner;
    }
}

class Submit extends Element {
    constructor(buttonName, func) {
        super();
        this.$tag = $("<input type='submit' value='" + buttonName + "'/>" +
            "<input type='hidden' name='act' value='1'/>");
        this.$tag.click((event) => {
            event.preventDefault();
            $.get(this.owner.scriptName, this.owner.$element.serialize(),func)
        })
    }

}
class Text extends Element {
    constructor(text, name, func) {
        super();
        this.$tag = $("<div class='line'> <label for='" + name + "'>" + text + "</label> <input type='text' id='" + name + "' name='" + name + "'>" +
            "<div class='line comment'> </div> </div></br>");
        this.$tag.find("input[type=text]").blur(() => {
            var result = func(this.$tag.find("input[type=text]").val());
            if (result != "Ok") {
                this.$tag.find(".comment").text(result).show();
            }
            else {
                this.$tag.find(".comment").hide();
            }
        });
    }
}