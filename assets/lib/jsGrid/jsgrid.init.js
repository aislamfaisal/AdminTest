$(function() {
    // Basic Scenario
    $("#basicScenario").jsGrid( {
        width: "100%",

        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        pageSize: 5,
        pageButtonCount: 5,

        deleteConfirm: "Do you really want to delete the client?",

        controller: db,

        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
    });

    // Static Scenario
    $("#staticScenario").jsGrid({
        width: "100%",

        sorting: true,
        paging: true,

        pageSize: 5,
        pageButtonCount: 3,

        data: db.clients,

        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married" }
        ]
    });

    // Data Manipulation Scenario
    $("#maipulationScenario").jsGrid({
        width: "100%",
        editing: true,
        autoload: true,

        sorting: true,
        paging: true,

        pageSize: 5,
        pageButtonCount: 3,

        deleteConfirm: function(item) {
            return "The client \"" + item.Name + "\" will be removed. Are you sure?";
        },
        rowClick: function(args) {
            showDetailsDialog("Edit", args.item);
        },
        controller: db,
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            {
                type: "control",
                modeSwitchButton: false,
                editButton: false,
                headerTemplate: function() {
                    return $("<button>").attr("type", "button").text("Add")
                        .on("click", function () {
                            showDetailsDialog("Add", {});
                        });
                }
            }
        ]
    });

    $("#detailsDialog").dialog({
        autoOpen: false,
        width: 400,
        close: function() {
            $("#detailsForm").validate().resetForm();
            $("#detailsForm").find(".error").removeClass("error");
        }
    });

    $("#detailsForm").validate({
        rules: {
            name: "required",
            age: { required: true, range: [18, 150] },
            address: { required: true, minlength: 10 },
            country: "required"
        },
        messages: {
            name: "Please enter name",
            age: "Please enter valid age",
            address: "Please enter address (more than 10 chars)",
            country: "Please select country"
        },
        submitHandler: function() {
            formSubmitHandler();
        }
    });

    var formSubmitHandler = $.noop;

    var showDetailsDialog = function(dialogType, client) {
        $("#name").val(client.Name);
        $("#age").val(client.Age);
        $("#address").val(client.Address);
        $("#country").val(client.Country);
        $("#married").prop("checked", client.Married);

        formSubmitHandler = function() {
            saveClient(client, dialogType === "Add");
        };

        $("#detailsDialog").dialog("option", "title", dialogType + " Client")
            .dialog("open");
    };

    var saveClient = function(client, isNew) {
        $.extend(client, {
            Name: $("#name").val(),
            Age: parseInt($("#age").val(), 10),
            Address: $("#address").val(),
            Country: parseInt($("#country").val(), 10),
            Married: $("#married").is(":checked")
        });

        $("#jsGrid").jsGrid(isNew ? "insertItem" : "updateItem", client);

        $("#detailsDialog").dialog("close");
    };


    // Sorting Scenario
    $("#sortingScenario").jsGrid({
        width: "100%",

        autoload: true,
        selecting: false,

        controller: db,

        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married" }
        ]
    });


    $("#sort").click(function() {
        var field = $("#sortingField").val();
        $("#jsGrid").jsGrid("sort", field);
    });

});